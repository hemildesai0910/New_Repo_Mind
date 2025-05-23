// "use client";

// import { Button } from "@/components/ui/button";
// import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
// import useProject from "@/hooks/use-project";
// import { cn } from "@/lib/utils";

// import { AlbumIcon, Bot, BotIcon, CpuIcon, CreditCard, LayoutDashboard, Plus, Presentation } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const items = [ 
//     {
//         title: 'Dashboard',
//         url: '/dashboard',
//         icon: LayoutDashboard,
//     },
//     {
//         title: 'Q&A',
//         url: '/qa',
//         icon: Bot,
//     },{
//         title: 'Meetings',
//         url: '/meetings',
//         icon: Presentation,
//     },{
//         title: 'Billing',
//         url: '/billing',
//         icon: CreditCard,
//     },{
//         title: 'GithubTreeModel',
//         url: '/aimodels',
//         icon: CpuIcon
//     },
//     {
//         title: 'DocumentSummarizer',
//         url: '/docsummarizer',
//         icon: AlbumIcon
//     }
// ]



// export function AppSidebar() {
//     const pathname = usePathname();
//     const {open}= useSidebar();
//     const {projects, projectId, setProjectId}= useProject();
//     return (
//         <Sidebar collapsible="icon" variant="floating">
//             <SidebarHeader>
//               <div className="flex items-center gap-2">
//                     <Image src="/logo.png" width={40} height={40} alt="logo" className="rounded"/>
//                     {open && ( 
//                     <h1 className="text-xl font-bold text-primary/80">
//                     Repomind</h1>
//                     )}
//               </div>
//             </SidebarHeader>

//             <SidebarContent>
//             <SidebarGroup>
//                 <SidebarGroupLabel>
//                     Application
//                 </SidebarGroupLabel>
//                 <SidebarGroupContent> 
//                     <SidebarMenu> 
//                     {items.map(item=>{
//                         return(
//                             <SidebarMenuItem key={item.title}>
//                                <SidebarMenuButton asChild>
//                                     <Link href={item.url} className={cn({
//                                         '!bg-primary !text-white': pathname===item.url
//                                     }, 'list-none')}>
//                                         <item.icon />
//                                         <span>{item.title}</span>
//                                     </Link>
//                                 </SidebarMenuButton> 
//                             </SidebarMenuItem>
//                          )
//                      })} 
//                     </SidebarMenu>  
//                 </SidebarGroupContent>
//             </SidebarGroup>

//                 <SidebarGroup>
//                     <SidebarGroupLabel>
//                     Your Project
//                     </SidebarGroupLabel>
//                     <SidebarGroupContent>
//                         <SidebarMenu>
//                             {projects?.map(project=>{
//                                 return(
//                                     <SidebarMenuItem key={project.name}>
//                                         <SidebarMenuButton asChild>
//                                             <div onClick={()=>{
//                                                 setProjectId(project.id)
//                                             }}>
//                                                 <div className={cn(
//                                                 'rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary',
//                                                 {
//                                                     'bg-primary text-white' : project.id === projectId
//                                                 }
//                                                 )}>
//                                                      {project.name[0]}
//                                                 </div>
//                                                 <span>{project.name}</span>
//                                             </div>
//                                         </SidebarMenuButton>
//                                     </SidebarMenuItem>
//                                 )
//                             })}

//                             <div className="h-2"></div>


// {open && (
//                             <SidebarMenuItem>
//                                 <Link href='/create'>
//                                     <Button size='sm' variant={'outline'} className="w-fit">
//                                         <Plus />
//                                         Create Project
//                                     </Button>
//                                 </Link>
//                             </SidebarMenuItem>
// )}
//                         </SidebarMenu>
//                     </SidebarGroupContent>
//                 </SidebarGroup>

//             </SidebarContent>
//         </Sidebar>
//     )
// }


"use client";

import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import useProject from "@/hooks/use-project";
import { cn } from "@/lib/utils";

import { AlbumIcon, Bot, BotIcon, CpuIcon, CreditCard, LayoutDashboard, Plus, Presentation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [ 
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        title: 'Q&A',
        url: '/qa',
        icon: Bot,
    },{
        title: 'Meetings',
        url: '/meetings',
        icon: Presentation,
    },{
        title: 'Billing',
        url: '/billing',
        icon: CreditCard,
    },{
        title: 'GithubTreeModel',
        url: '/aimodels',
        icon: CpuIcon
    },
    {
        title: 'DocumentSummarizer',
        url: '/docsummarizer',
        icon: AlbumIcon
    }
]

export function AppSidebar() {
    const pathname = usePathname();
    const {open}= useSidebar();
    const {projects, projectId, setProjectId}= useProject();
    return (
        <Sidebar 
            collapsible="icon" 
            variant="floating" 
            className="bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 border-none shadow-xl rounded-lg overflow-hidden"
        >
            {/* Outer border container */}
            <div className="h-full w-full p-0.5 bg-gradient-to-br from-white/40 via-white/20 to-white/30 rounded-lg">
                <div className="h-full w-full bg-gradient-to-br from-blue-300 via-purple-400 to-blue-500 rounded-lg backdrop-blur-sm">
                    <SidebarHeader>
                      <div className="flex items-center gap-2">
                            <Image src="/image.jpg" width={40} height={40} alt="logo" className="rounded shadow-md"/>
                            {open && ( 
                            <h1 className="text-xl font-bold text-white drop-shadow-md">
                            Repomind</h1>
                            )}
                      </div>
                    </SidebarHeader>

                    <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-white/90 font-semibold drop-shadow-sm">
                            Application
                        </SidebarGroupLabel>
                        <SidebarGroupContent> 
                            <SidebarMenu> 
                            {items.map(item=>{
                                return(
                                    <SidebarMenuItem key={item.title}>
                                       <SidebarMenuButton asChild>
                                            <Link href={item.url} className={cn({
                                                '!bg-white/90 !text-purple-600 border-2 border-white/60 shadow-md': pathname===item.url
                                            }, 'list-none text-white hover:bg-white/20 transition-all duration-200')}>
                                                <item.icon className={cn({
                                                    'drop-shadow-none': pathname===item.url
                                                }, 'drop-shadow-sm')} />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton> 
                                    </SidebarMenuItem>
                                 )
                             })} 
                            </SidebarMenu>  
                        </SidebarGroupContent>
                    </SidebarGroup>

                        <SidebarGroup>
                            <SidebarGroupLabel className="text-white/90 font-semibold drop-shadow-sm">
                            Your Project
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {projects?.map(project=>{
                                        return(
                                            <SidebarMenuItem key={project.name}>
                                                <SidebarMenuButton 
                                                    asChild 
                                                    className={cn(
                                                        "text-white hover:bg-white/20 transition-all duration-200",
                                                        {
                                                            "!bg-white/30 rounded-md !shadow-md border-2 border-white/50": project.id === projectId
                                                        }
                                                    )}
                                                >
                                                    <div onClick={()=>{
                                                        setProjectId(project.id)
                                                    }}>
                                                        <div className={cn(
                                                        'rounded-sm border-2 border-white/60 size-6 flex items-center justify-center text-sm bg-white text-purple-600 shadow-md',
                                                        {
                                                            'bg-blue-100 text-purple-800 border-white glow-sm' : project.id === projectId
                                                        }
                                                        )}>
                                                             {project.name[0]}
                                                        </div>
                                                        <span className={cn(
                                                            "drop-shadow-sm",
                                                            {
                                                                "font-semibold text-white": project.id === projectId
                                                            }
                                                        )}>
                                                            {project.name}
                                                        </span>
                                                    </div>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        )
                                    })}

                                    <div className="h-2"></div>

                                    {open && (
                                    <SidebarMenuItem>
                                        <Link href='/create'>
                                            <Button size='sm' variant={'outline'} className="w-fit bg-transparent border-2 border-white/80 text-white shadow-md hover:bg-white hover:text-purple-600 transition-all duration-200">
                                                <Plus />
                                                Create Project
                                            </Button>
                                        </Link>
                                    </SidebarMenuItem>
                                    )}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </div>
            </div>
        </Sidebar>
    )
}

// Add this CSS in your global styles to create the glow effect
/*
.glow-sm {
  box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.3);
}
*/