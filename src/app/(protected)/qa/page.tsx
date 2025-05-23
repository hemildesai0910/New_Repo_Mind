// "use client"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
// import useProject from '@/hooks/use-project'
// import { api } from '@/trpc/react'
// import React from 'react'
// import AskQuestionCard from '../dashboard/ask-question-card'
// import MDEditor from '@uiw/react-md-editor'
// import CodeReferences from '../dashboard/code-references'

// const QAPAGE = () => {
//   const { projectId } = useProject()
//   const { data: questions } = api.project.getQuestions.useQuery({projectId})
//   const [questionIndex, setQuestionIndex] = React.useState(0)
//   const question = questions?.[questionIndex]

//   return (
//     <Sheet>
//        <AskQuestionCard />
//        <div className="h-4"></div>
//        <h1 className='text-xl font-semibold'>Saved Questions</h1>
//        <div className="h-2"></div>
//        <div className='flex flex-col gap-2'>
//           {questions?.map((question,index) =>{
//             return <React.Fragment key={question.id}>
//               <SheetTrigger onClick={()=>setQuestionIndex(index)}>
//                 <div className='flex items-center gap-4 bg-white rounded-lg p-4 shadow border'>
//                     <img className='rounded-full' height={30} width={30} src={question.user.imageUrl ?? ""}/>

//                     <div className='text-left flex flex-col'>
//                       <div className='flex items-center gap-2'>
//                         <p className='text-gray-700 line-clamp-1 text-lg font-medium'>
//                             {question.question}
//                         </p>
//                         <span className='text-xs text-gray-400 whitespace-nowrap'>
//                           {question.createdAt.toLocaleDateString()}
//                         </span>
//                       </div>
//                       <p className='text-gray-500 line-clamp-1 text-sm'>
//                         {question.answer}
//                       </p>
//                     </div>
//                 </div>
//               </SheetTrigger>
//             </React.Fragment>
//           })}
//        </div>
//           {question && (
//             <SheetContent className='sm:max-w-[80vw]'>
//                <SheetHeader>
//                   <SheetTitle>
//                     {question.question}
//                   </SheetTitle>
//                   <MDEditor.Markdown source={question.answer} />
//                   <CodeReferences filesReferences={(question.filesReferences ?? []) as any} />
//                 </SheetHeader> 
//             </SheetContent>
//           )}
//     </Sheet>
//   )
// }

// export default QAPAGE


"use client"

import { useState, useEffect } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import useProject from '@/hooks/use-project'
import { api } from '@/trpc/react'
import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import CodeReferences from '../dashboard/code-references'
import { Search, MapPin, Sliders, Calendar, X } from 'lucide-react'

const QAPAGE = () => {
  const { projectId } = useProject()
  const { data: questions } = api.project.getQuestions.useQuery({ projectId })
  const [questionIndex, setQuestionIndex] = useState(0)
  const question = questions?.[questionIndex]

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredQuestions, setFilteredQuestions] = useState(questions || [])
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [sortOrder, setSortOrder] = useState('newest')

  // Filter options
  const filterOptions = [
    "Answered", 
    "Unanswered", 
    "Code", 
    "Documentation"
  ]

  // Update filtered questions when search or filters change
  useEffect(() => {
    if (!questions) return

    let filtered = [...questions]
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (q.answer && q.answer.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }
    
    // Apply tag filters (this is a placeholder - you would need to add tags to your questions model)
    if (activeFilters.length > 0) {
      // This is just an example, you would need to implement tag-based filtering based on your data structure
      filtered = filtered.filter(q => {
        // Example: if you have a tags field in your question model
        // return activeFilters.some(filter => q.tags.includes(filter))
        return true // Placeholder that doesn't filter anything
      })
    }
    
    // Apply sorting
    filtered = filtered.sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      } else {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      }
    })
    
    setFilteredQuestions(filtered)
  }, [questions, searchQuery, activeFilters, sortOrder])

  // Toggle filter
  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    )
  }

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters([])
    setSearchQuery('')
  }

  // Format date for display
  const formatDate = (date: Date) => {
    const now = new Date()
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    return date.toLocaleDateString()
  }

  return (
  //  <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-blue-100 p-6">
<div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 p-8">
<div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
          <h1 className="text-2xl font-bold mb-6">Questions & Answers</h1>

          {/* Search and filters section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Search input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search by keywords" 
                className="pl-10 py-6 h-12 bg-gray-50 border-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Filter dropdown */}
            <div className="relative">
              <div className="flex items-center justify-between bg-gray-50 rounded-md border border-gray-200 px-3 py-2 h-12 cursor-pointer">
                <span className="text-gray-600 flex items-center">
                  <Sliders size={18} className="mr-2" />
                  Filters
                </span>
                <Badge className="bg-purple-500 rounded-full">{activeFilters.length}</Badge>
              </div>
              
              {/* Dropdown menu would go here in a proper implementation */}
            </div>
            
            {/* Sort dropdown */}
            <div className="relative">
              <div className="flex items-center justify-between bg-gray-50 rounded-md border border-gray-200 px-3 py-2 h-12 cursor-pointer">
                <span className="text-gray-600 flex items-center">
                  <Calendar size={18} className="mr-2" />
                  Sort by: {sortOrder === 'newest' ? 'Newest first' : 'Oldest first'}
                </span>
              </div>
              
              {/* Dropdown menu would go here in a proper implementation */}
            </div>
          </div>
          
          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activeFilters.map(filter => (
                <Badge key={filter} className="px-3 py-1 bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer flex items-center gap-1"
                  onClick={() => toggleFilter(filter)}>
                  {filter} <X size={14} />
                </Badge>
              ))}
              <Button variant="link" className="text-purple-500 text-sm py-0 h-auto" onClick={clearAllFilters}>
                Clear All
              </Button>
            </div>
          )}
          
          {/* Questions count */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">We've found {filteredQuestions.length} questions</p>
          </div>

          {/* Questions list */}
          <Sheet>
            <div className="space-y-3">
              {filteredQuestions.map((q, index) => (
                <React.Fragment key={q.id}>
                  <SheetTrigger 
                    className="w-full text-left" 
                    onClick={() => setQuestionIndex(questions?.findIndex(question => question.id === q.id) || 0)}
                  >
                    <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                      index === questionIndex ? 'border-purple-300 ring-2 ring-purple-100 shadow-lg' : 'border-gray-200 hover:border-purple-200 hover:shadow-md'
                    }`}>
                      <div className="flex p-4 gap-4">
                        {/* Logo/Avatar */}
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
                          <img 
                            className="w-full h-full object-cover" 
                            src={q.user.imageUrl ?? "/logo-placeholder.svg"} 
                            alt="User avatar"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-lg line-clamp-1">{q.question}</h3>
                            <div className="text-right">
                              <p className="text-purple-500 font-semibold">{formatDate(q.createdAt)}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-gray-500 text-sm gap-2 mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {`${q.user.firstName ?? ''} ${q.user.lastName ?? ''}`.trim() || 'Anonymous'}
                            </span>
                          </div>
                          
                          {/* Answer preview */}
                          <p className="text-gray-600 line-clamp-1 mt-2">{q.answer || 'No answer yet'}</p>
                          
                          {/* Tags - you would need to add these to your model */}
                          <div className="flex flex-wrap gap-2 mt-3">
                            <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200 font-normal">
                              {q.answer ? 'Answered' : 'Unanswered'}
                            </Badge>
                            {/* Example tags - you would need to implement this based on your data */}
                            {Math.random() > 0.5 && (
                              <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 font-normal">
                                Code
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SheetTrigger>
                </React.Fragment>
              ))}
              
              {filteredQuestions.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <Search className="text-gray-400" size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-700">No questions found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
            
            {/* Question detail sidebar */}
            {question && (
              <SheetContent className="sm:max-w-[80vw]">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold">
                    {question.question}
                  </SheetTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-500 my-2">
                    <img 
                      className="w-8 h-8 rounded-full" 
                      src={question.user.imageUrl || "/default-avatar.png"} 
                      alt="User avatar" 
                    />
                    <span>{`${question.user.firstName ?? ''} ${question.user.lastName ?? ''}`.trim() || 'Anonymous'}</span>
                    <span>•</span>
                    <span>{formatDate(question.createdAt)}</span>
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <MDEditor.Markdown source={question.answer || '*No answer yet*'} />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-2">Code References</h3>
                    <CodeReferences filesReferences={(question.filesReferences ?? []) as any} />
                  </div>
                </SheetHeader>
              </SheetContent>
            )}
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default QAPAGE