# Actions Tests Explained

This document provides a detailed explanation of the automated test suite for the server actions located in `src/app/actions/`. These tests use **Jest** to ensure the reliability and correctness of backend logic.

## Overview
All tests are located in `src/app/actions/__tests__/`. We use **mocking** to isolate the business logic from external dependencies like the database and file storage.

-   **Database Mock**: `@/lib/db` is mocked to simulate Knex.js query chains (e.g., `.where().select()`).
-   **Storage Mock**: `@/lib/storage` is mocked to verify file upload logic without checking actual disk writes.
-   **Session Mock**: `@/lib/session` is mocked to verify authentication flow.

---

## 1. Auth Actions (`auth.test.ts`)
Tests the authentication logic for the Admin panel.

-   **`login`**:
    -   **Success**: Verifies that valid credentials (from env vars `ADMIN_EMAIL`/`ADMIN_PASSWORD`) create a session and redirect to the dashboard.
    -   **Failure**: Checks that incorrect credentials return specific error messages for email/password fields.
    -   **Validation**: Ensures that invalid input formats (e.g., "not-an-email") are caught by Zod schema validation before hitting the logic.
-   **`logout`**:
    -   Verifies that the session is deleted and the user is redirected to the login page.

## 2. Blog Actions (`blog.test.ts`)
Tests the CRUD operations and retrieval logic for the Blog feature.

-   **`getBlogs`**:
    -   **Pagination**: Verifies correct offset calculation `(page - 1) * limit`.
    -   **Filtering**: Checks if the `title` search query is applied correctly to the DB query.
    -   **Edge Cases**: Ensures empty result sets and negative page numbers are handled gracefully (returning empty arrays/safe defaults).
-   **`getBlogById` & `getBlogBySlug`**:
    -   **Slug Precedence**: Detailed test to ensure that if a blog has a numeric slug like "123", it takes precedence over a blog with ID 123.
    -   **Fallback**: Verifies legacy support where a numeric slug falls back to searching by ID if no slug match is found.
-   **`createBlog` / `updateBlog`**:
    -   **Validation**: Checks database error handling (e.g., duplicate slugs).
    -   **Partial Updates**: Verifies `updateBlog` only modifies the fields provided in the payload, preserving existing data.
-   **`getLatestBlogs`**:
    -   Ensures only `published` blogs are returned and are ordered by `created_at` descending.
-   **`getBlogStats`**:
    -   Verifies aggregation of Total, Published, and Draft counts.

## 3. Schedule Actions (`schedule.test.ts`)
Tests the Event/Schedule management logic.

-   **`getSchedules`**:
    -   **Filters**: Verifies filtering by `type` (Webinar, Workshop), `month`, and `year`.
    -   **Pagination**: Checks default limits and offset logic.
-   **`createSchedule`**:
    -   **Pricing**: Confirms that `original_price` and `discounted_price` are correctly inserted into the database.
    -   **File Uploads**: Mocks `File` objects to verify that `saveFile` is called for speaker and featured images, and the resulting URLs are saved to the DB.
    -   **Validation**: Ensures missing required fields return an error message.
-   **`updateSchedule`**:
    -   **Partial Updates**: Verifies that updating a single field (like `title`) works without requiring the entire object.
    -   **Image Replacement**: Checks logic for uploading a new image during an update.
-   **`getLatestSchedules`**:
    -   Verifies ordering by `updated_at` to show the most recently modified events.

## 4. Subscribe Actions (`subscribe.test.ts`)
Tests the Newsletter subscription logic.

-   **Success**: Verifies valid emails are inserted into the `emails` table.
-   **Validation**: Checks that invalid email formats (e.g., "invalid-text") are rejected by Zod validation.
-   **Duplicates**: scenarios where the email already exists in the database. The test ensures a "already subscribed" message is returned instead of a database crash.
-   **Error Handling**: Verifies that database connection failures are caught and return a user-friendly error message.

---

## How to Run Tests

To run the full test suite:
```bash
npx jest
```

To run a specific test file:
```bash
npx jest src/app/actions/__tests__/auth.test.ts
```
