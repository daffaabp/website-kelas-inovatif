import React, { useState } from 'react';
import { AlumniStory, PersonaType } from '../_data/stories';
import { StoryCard } from './StoryCard';
import { StoryModal } from './StoryModal';
import { SearchX } from 'lucide-react';

interface FeaturedStoriesProps {
    stories: AlumniStory[];
    activeFilter: PersonaType | 'all';
}

export function FeaturedStories({ stories, activeFilter }: FeaturedStoriesProps) {
    const [selectedStory, setSelectedStory] = useState<AlumniStory | null>(null);

    const filteredStories = activeFilter === 'all' 
        ? stories 
        : stories.filter(story => story.persona === activeFilter);

    return (
        <section className="relative -mt-12 z-20 pb-20">
            <div className="container mx-auto px-6">
                {filteredStories.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredStories.map((story) => (
                            <div key={story.id} className="h-full">
                                <StoryCard 
                                    story={story} 
                                    onReadMore={(s) => setSelectedStory(s)}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white dark:bg-[#1A2220] rounded-3xl border border-dashed border-gray-300 dark:border-gray-700">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <SearchX className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Belum ada cerita untuk kategori ini</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                            Kami terus mengumpulkan kisah inspiratif. Coba pilih kategori lain untuk saat ini.
                        </p>
                    </div>
                )}
            </div>

            {/* Modal Overlay */}
            <StoryModal 
                story={selectedStory} 
                onClose={() => setSelectedStory(null)} 
            />
        </section>
    );
}
