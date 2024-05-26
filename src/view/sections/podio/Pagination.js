import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "../../../components/ui/pagination";

export const PaginationPodio = ({
    endIndex,
    onClick,
    prev,
    next
}) => {
    return (
        <section className="flex justify-center">
            <Pagination>
                <PaginationContent className="shadow-inner">
                    <PaginationItem>
                        <PaginationPrevious
                            className={
                                endIndex === 13 ?
                                    "pointer-events-none opacity-50" :
                                    undefined
                            }
                            onClick={prev} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            id="pagitem-1"
                            className={
                                endIndex === 13 ?
                                    "pointer-events-none opacity-50" :
                                    undefined
                            }
                            onClick={onClick}>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            id="pagitem-2"
                            className={
                                endIndex === 23 ?
                                    "pointer-events-none opacity-50" :
                                    undefined
                            }
                            onClick={onClick}>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            id="pagitem-3"
                            className={
                                endIndex === 33 ?
                                    "pointer-events-none opacity-50" :
                                    undefined
                            }
                            onClick={onClick}>
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            id="pagitem-4"
                            className={
                                endIndex === 43 ?
                                    "pointer-events-none opacity-50" :
                                    undefined
                            }
                            onClick={onClick}>
                            4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            id="pagitem-5"
                            className={
                                endIndex === 53 ?
                                    "pointer-events-none opacity-50" :
                                    undefined
                            }
                            onClick={onClick}>
                            5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            className={
                                endIndex === 53 ?
                                    "pointer-events-none opacity-50" :
                                    undefined
                            }
                            onClick={next} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    );
}