import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

export const test = async () => {
    
    const search = {

    }
    
    const itemPerPage = parseInt( parseInt( search.itemPerPage ) ) || 12
    const page = search.page - 1 || 0

    

    const listProject = await prisma.project.findMany( {
        skip: page * itemPerPage,
        take: itemPerPage,
        where: {
            isActive: search.isActive,
            title: {
                contains: search.title,
                mode: 'insensitive'
            },
            tech: {
                some: {
                    name: {
                        in: search.tech || undefined
                    }
                }
            },
            researchFields: {
                some: {
                    name: {
                        in: search.researchFields || undefined
                    }
                }
            },
            methods: {
                some: {
                    name: {
                        in: search.methods || undefined
                    }
                }
            }
        },
        include: {
            student: {
                select: {
                    user: {
                        select: {
                            username: true
                        }
                    },
                    name: true,
                    image: true
                }
            },
            tech: {
                select: {
                    name: true
                }
            },
            port: {
                select: {
                    number: true
                }
            }
        },
        orderBy: {
            id: 'desc'
        }
    } )

    // const totalPage = Math.ceil( await projects.count( {
    //     where: {
    //         isActive: search.isActive,
    //         title: {
    //             contains: search.title,
    //         },
    //         tech: {
    //             every: {
    //                 name: {
    //                     in: search.tech || undefined
    //                 }
    //             }
    //         },
    //         researchFields: {
    //             every: {
    //                 name: {
    //                     in: search.researchFields || undefined
    //                 }
    //             }
    //         },
    //         methods: {
    //             every: {
    //                 name: {
    //                     in: search.methods || undefined
    //                 }
    //             }
    //         }
    //     }
    // } ) / itemPerPage )

    const totalPage = 1

    return { data: listProject, totalPage }

}

export const findResearchField = async ( name ) => {
    const lecturer = lecturers.findMany( {
        take: 10,
        where: {
            name: {
                contains: name,
                mode: 'insensitive'
            },
        },
        select: {
            name: true,
        }
    } )
    return lecturer
}

export const findMethod = async ( name ) => {
    const lecturer = lecturers.findMany( {
        take: 10,
        where: {
            name: {
                contains: name,
                mode: 'insensitive'
            },
        },
        select: {
            name: true,
        }
    } )
    return lecturer
}