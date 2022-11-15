import { PrismaClient } from '../prisma/client/index.js'

const projects = new PrismaClient().project


export const create = async ( data ) => {
    console.log(data);
    const project = await projects.create( {
        data: data
    } )
    return project
}

export const list = async ( search ) => {
    const itemPerPage = parseInt( parseInt( search.itemPerPage ) ) || 12
    const page = search.page - 1 || 0


    const data = await projects.findMany( {
        skip: page * itemPerPage,
        take: itemPerPage,
        where: {
            isActive: search.isActive,
            title: {
                search: search.title,
            },
            tech: {
                some: {
                    name: {
                        in: search.tech
                    }
                }
            },
            // researchFields: {
            //     some: {
            //         name: {
            //             in: search.researchFields
            //         }
            //     }
            // },
            // methods: {
            //     some: {
            //         name: {
            //             in: search.methods
            //         }
            //     }
            // }
        },
        include: {
            student: {
                include: {
                    user: true
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
    const totalPage = Math.ceil( await projects.count( {
        where: {
            isActive: search.isActive,
            title: {
                search: search.title,
            },
            tech: {
                some: {
                    name: {
                        in: search.tech
                    }
                }
            },
            // researchFields: {
            //     some: {
            //         name: {
            //             in: search.researchFields
            //         }
            //     }
            // },
            // methods: {
            //     some: {
            //         name: {
            //             in: search.methods
            //         }
            //     }
            // }
        }
    } ) / itemPerPage )

    return { data, totalPage }
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
