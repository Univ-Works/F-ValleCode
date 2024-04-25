import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { EditorCode } from "./editor/Editor"
 
export function CarouselCustom({
    question
}) {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {question.map((elements, index) => (
            <React.Fragment key={index}>
                <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="container p-8">
                          {/*<span className="text-4xl font-semibold" id={`span${index}`}>{elements}</span>*/}
                          <EditorCode />
                        </CardContent>
                      </Card>
                    </div>
                </CarouselItem>
            </React.Fragment>  
        ))}
      </CarouselContent>
      <CarouselPrevious id="prev" />
      <CarouselNext id="next"/>
    </Carousel>
  )
}