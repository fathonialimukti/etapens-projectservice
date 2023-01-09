import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const test = async () => {
    const result = await prisma.project.create( {
        data: {
            title: "SISTEM INFORMASI PARIWISATA DI KABUPATEN BOJONEGORO BERBASIS ANDROID",
            description: "Kabupaten Bojonegoro, provinsi jawa timur merupakan salah satu daerah di Indonesia yang memiliki banyak pariwisata. Berbagai jenis wisata seperti wisata alam, wisata buatan, wisata kuliner, budaya, maupun agrowista terdapat di daerah tersebut. Akan tetapi dalam penyebaran informasi seputar pariwisata masih bersifat manual dan masih banyak masyarakat yang belum mengetahui tempat-tempat wisata di bojonegoro. Maka dari itu munculah ide untuk membuat sebuah sistem informasi pariwisata berbasis android yang bertujuan untuk mempermudah proses pencarian wisata di kabupaten bojonegoro. Pada penelitian ini pembuatan aplikasi tersebut menggunakan metode SDLC, kemudian frontend android menggunakan platform flutter dan juga tersedia web admin dengan menggunakan framework codeigniter Dari hasil yang didapat dari pengujian fungsionalitas terhadap sistem, dapat disimpulkan bahwa sistem yang dibuat sesuai dengan harapan.",
            documents: [
                {
                    "url": "https://drive.google.com/file/d/16aGZO8qZEcOL1A_EdQQ3V8wizWEINW77/view?usp=share_link",
                    "name": "Buku TA"
                },
                {
                    "url": "https://drive.google.com/file/d/1OyxNXQ50E9dnAqZ3u1QY_gp5XKg_6I0q/view?usp=share_link",
                    "name": "Presentasi TA"
                }
            ],
            images: [
                "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/90.png",
                "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/91.png",
                "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/92.png",
                "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/93.png",
                "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/94.png",
            ],
            tech: {
                connect: [ { id: 37 }, { id: 29 }, { id: 9 } ]
            },
            researchField: {
                connect: [ { id: 3 } ]
            },
            // method: {
            //     connect: [ { id: 27 } ]
            // },
            student: {
                create: {
                    name: "Diana Nazilah",
                    nrp: "3120550026",
                    image: "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/95.png",
                    bio: "Bio Data Diana Nazilah",
                    user: {
                        create: {
                            username: "diananazilah",
                            email: "diananazilah@it.student.pens.ac.id",
                            role: 'Student',
                        }
                    },
                    isActive: true
                }
            },
            lecturers: {
                create: [
                    {
                        name: "Arif Basofi, S.Kom, M.T.",
                        nip: "1976092120031",
                        user: {
                            create: {
                                username: "arifbasofi",
                                email: "arifbasofi@pens.ac.id",
                                role: 'Lecturer'
                            }
                        },
                        isActive: true
                    },
                ],
                connect: [ { id: 13 } ]
            },
            isActive: true
        }
    } )

    return result
}