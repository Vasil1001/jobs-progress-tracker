'use client'

import BarChartGoal from '@/components/BarChartGoal'
import { CVPage } from '@/components/CVPage'
import { LineChartWeights } from '@/components/LineChart'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Container from '@/components/ui/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  return (

      <div>
        <div className="my-6 text-3xl font-bold tracking-tighter">Dashboard</div>
        <CVPage />
      </div>

  )
}

// <Card className="flex h-full flex-col">
//                 <CardHeader>
//                   <CardTitle>Overview</CardTitle>
//                   <CardDescription>Main targets to accompany gym journey</CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex h-full justify-between gap-6 pb-4">
//                   <div className="rounded-lg  bg-opacity-[0.6] p-2 text-center">
//                     <div className="text-3xl font-bold tracking-tighter">1700C</div>
//                     <div className="ml-1 mt-0.5 text-[0.70rem] uppercase text-muted-foreground">
//                       Calories/day
//                     </div>
//                   </div>

//                   <div className="rounded-lg bg-opacity-[0.6] p-2 text-center">
//                     <div className="text-3xl font-bold tracking-tighter">100g</div>
//                     <div className="ml-1 mt-0.5 text-[0.70rem] uppercase text-muted-foreground">
//                       Protein/day
//                     </div>
//                   </div>

//                   <div className="rounded-lg bg-opacity-[0.6] p-2 text-center">
//                     <div className="text-3xl font-bold tracking-tighter">3 x</div>
//                     <div className="ml-1 mt-0.5 text-[0.70rem] uppercase text-muted-foreground">
//                       Gym/week
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

{
  /* <div className="">
          <div className="my-6 text-3xl font-bold tracking-tighter">Dashboard</div>
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-1 flex w-full gap-6">
              <Card className="col-span-2 flex h-full flex-col">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>Main targets to accompany gym journey</CardDescription>
                </CardHeader>
                <CardContent className="flex h-full justify-between gap-6 pb-4">
                  <div className="rounded-lg  bg-opacity-[0.6] p-2 text-center">
                    <div className="text-3xl font-bold tracking-tighter">1700C</div>
                    <div className="ml-1 mt-0.5 text-[0.70rem] uppercase text-muted-foreground">
                      Calories/day
                    </div>
                  </div>

                  <div className="rounded-lg bg-opacity-[0.6] p-2 text-center">
                    <div className="text-3xl font-bold tracking-tighter">100g</div>
                    <div className="ml-1 mt-0.5 text-[0.70rem] uppercase text-muted-foreground">
                      Protein/day
                    </div>
                  </div>

                  <div className="rounded-lg bg-opacity-[0.6] p-2 text-center">
                    <div className="text-3xl font-bold tracking-tighter">3 x</div>
                    <div className="ml-1 mt-0.5 text-[0.70rem] uppercase text-muted-foreground">
                      Gym/week
                    </div>
                  </div>
                </CardContent>
              </Card>
              <BarChartGoal />
            </div>
          </div>
        </div> */
}
