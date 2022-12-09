import { PrismaClient } from '@prisma/client'


const projects = new PrismaClient().project


export const create = async ( data ) => {
    const project = await projects.create( {
        data: data
    } )
    return project
}

export const list = async ( search ) => {
    const itemPerPage = parseInt( parseInt( search.itemPerPage ) ) || 24
    const page = search.page - 1 || 0

    const listProject = await projects.findMany( {
        skip: page * itemPerPage,
        take: itemPerPage,
        where: {
            isActive: search.isActive,
            title: {
                contains: search.title,
                mode: 'insensitive'
            },
            tech: search.tech && {
                some: {
                    name: { in: search.tech }
                }
            },
            researchField: search.researchField && {
                some: {
                    name: { in: search.researchField }
                }
            },
            method: search.method && {
                some: {
                    name: { in: search.method }
                }
            }
        },
        include: {
            student: {
                select: {
                    name: true,
                    nrp: true
                }
            },
            tech: {
                select: {
                    name: true
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

export const listAdmin = async ( search ) => {
    const itemPerPage = parseInt( parseInt( search.itemPerPage ) ) || 24
    const page = search.page - 1 || 0

    const listProject = await projects.findMany( {
        skip: page * itemPerPage,
        take: itemPerPage,
        where: {
            isActive: search.isActive,
            title: {
                contains: search.title,
                mode: 'insensitive'
            },
        },
        include: {
            student: {
                select: {
                    name: true,
                    user: {
                        select: {
                            username: true
                        }
                    }
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

export const get = async ( title ) => {
    const project = await projects.findFirstOrThrow( {
        where: {
            title: title
        },
        include: {
            student: true,
            lecturers: true,
            comments: {
                take: 10,
                orderBy: {
                    id: 'desc'
                }
            }
        }
    } )

    return project
}

export const update = async ( data ) => {
    const project = await projects.update( {
        where: { id: data.id },
        data: data
    } )
    return project
}

export const activate = async ( id, url ) => {
    const project = await projects.update( {
        where: { id: parseInt( id ) },
        data: {
            isActive: true,
            url: url
        }
    } )
    return project
}

export const comment = async ( projectId, username, comment ) => {
    const project = await projects.update( {
        where: { id: parseInt( projectId ) },
        data: {
            comments: {
                create: {
                    username: username,
                    comment: comment
                }
            }
        }
    } )
    return project
}
