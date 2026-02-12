import { ArrowLeft, Clock, BarChart, Users, CheckCircle, Star, Share2 } from 'lucide-react';
import Image from 'next/image';
import { Course } from '../types';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';

interface CourseDetailViewProps {
  course: Course;
  onBack: () => void;
}

export function CourseDetailView({ course, onBack }: CourseDetailViewProps) {
  return (
    <div className="min-h-screen bg-eduzin-light animate-fadeIn">
      <Navbar />

      {/* Header Spacer since Navbar is fixed */}
      <div className="h-20"></div>

      {/* Breadcrumb / Back Navigation */}
      <div className="container mx-auto px-4 md:px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-eduzin-dark transition-colors uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft size={16} /> Back to Courses
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-eduzin-dark text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image src={course.image} alt="bg" className="object-cover" fill />
          <div className="absolute inset-0 bg-eduzin-dark mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                {course.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6">
                {course.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm text-white/80 font-medium">
                <div className="flex items-center gap-2">
                  <Clock size={18} /> {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <BarChart size={18} /> {course.level}
                </div>
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-yellow-400 fill-yellow-400" /> {course.rating} Rating
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} /> {course.students?.toLocaleString('en-US')} Students
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-medium mb-6">About this Course</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {course.description}
              </p>
            </section>

            {/* Syllabus */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-medium mb-6">Syllabus</h3>
              <div className="space-y-4">
                {course.syllabus?.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-eduzin-light text-eduzin-dark font-bold flex items-center justify-center text-sm shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Prerequisites */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-medium mb-6">Prerequisites</h3>
              <ul className="space-y-3">
                {course.prerequisites?.map((req, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-eduzin-dark" />
                    {req}
                  </li>
                ))}
              </ul>
            </section>

            {/* Instructor Bio */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-medium mb-6">Your Instructor</h3>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="rounded-full object-cover border-4 border-eduzin-light"
                  width={96}
                  height={96}
                />
                <div>
                  <h4 className="text-xl font-bold mb-1">{course.instructor.name}</h4>
                  <p className="text-eduzin-dark font-medium text-sm mb-4 uppercase tracking-wide">{course.instructor.role}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Enroll Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 font-medium line-through">$450</span>
                  <span className="text-3xl font-bold text-eduzin-dark">{course.price}</span>
                </div>

                <button className="w-full bg-eduzin-dark text-white py-4 rounded-full font-bold text-sm hover:bg-opacity-90 transition-colors mb-4 shadow-lg shadow-eduzin-dark/20 cursor-pointer">
                  ENROLL NOW
                </button>

                <button className="w-full bg-transparent border border-gray-200 text-gray-700 py-3 rounded-full font-bold text-xs hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <Share2 size={14} /> SHARE COURSE
                </button>

                <div className="mt-8 space-y-4 text-sm text-gray-600">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Duration</span>
                    <span className="font-bold text-gray-900">{course.duration}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Lectures</span>
                    <span className="font-bold text-gray-900">{course.syllabus?.length || 0} Modules</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Level</span>
                    <span className="font-bold text-gray-900">{course.level}</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span>Certificate</span>
                    <span className="font-bold text-gray-900">Yes</span>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-eduzin-light p-6 rounded-2xl border border-gray-200 text-center">
                <h4 className="font-serif font-bold text-lg mb-2">Perlu informasi lebih lanjut?</h4>
                <p className="text-sm text-gray-600 mb-4">Hubungi tim penerimaan kami untuk panduan detail.</p>
                <a href="#" className="text-xs font-bold text-eduzin-dark underline decoration-2 underline-offset-4 cursor-pointer">HUBUNGI KAMI</a>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

