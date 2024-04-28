"use client";
import { ChevronDown, Pen } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { FeaturedCategories } from "@prisma/client";
import DsAddFeaturedCategoryDialog from "../dialogs/ds-add-featured-category-dialog";
import { ScrollArea } from "~/components/ui/scroll-area";

export default function DsFeaturedCategoriesManagement({
  featuredCategories,
}: {
  featuredCategories: FeaturedCategories[];
}) {
  return (
    <>
      <Card className="fixed bottom-3 end-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="w-[25em] flex-row items-center justify-between p-4">
              <>
                <div className="text-lg font-bold">Featured Categories</div>
              </>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="">
                <ScrollArea className="h-[30em]">
                  <Accordion type="single" collapsible>
                    {featuredCategories.map((i) => (
                      <AccordionItem
                        key={i.id}
                        className="rounded-lg border-0 bg-secondary/0 transition-all data-[state=open]:bg-secondary/30  data-[state=open]:ring"
                        value={`item-${i.id}`}
                      >
                        <AccordionTrigger className="rounded-lg px-4">
                          <div className="text-lg font-bold">{i.title}</div>
                        </AccordionTrigger>
                        <AccordionContent className="p-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between gap-2"
                            >
                              <div className="h-10 w-10 rounded-lg bg-secondary"></div>

                              <div className="flex flex-1 flex-col">
                                <div className="text-lg font-bold">sss</div>
                                <div className="text-sm text-muted-foreground">
                                  sss
                                </div>
                              </div>

                              <Button variant={"secondary"} size={"sm"}>
                                <Pen size={16} />
                              </Button>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <DsAddFeaturedCategoryDialog>
                    <Button className="w-full">
                      Add New Featured Category
                    </Button>
                  </DsAddFeaturedCategoryDialog>
                </ScrollArea>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </>
  );
}
