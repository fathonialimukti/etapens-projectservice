import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

export const test = async () => {
    const result = await prisma.project.create( {
        data: {
            title: "SISTEM INFORMASI PENYEWAAN DEKORASI PADA HK DECORATION",
            description: "HK Decoration merupakan salah satu tempat penyewaan dekorasi yang berada di kabupaten Lamongan. Dalam sistem penyewaan yang digunakan masih dilakukan dengan cara manual, untuk mengetahui informasi secara detail calon penyewa harus mendatangi tempat penyedia jasa sewa. Cara ini kurang efisien untuk media promosi menjangkau masyarakat yang lebih meluas dan pencatatan secara manual sering mengakibatkan terjadinya kesalahan dalam penulisan informasi dan pelaporan data penyewaan. Pada proyek akhir ini bertujuan untuk mempermudah customer dalam mendapatkan informasi dan melakukam proses penyewaan dekorasi hingga pada tahap sistem pembayaran. Selain itu memberikan kemudahan kepada pihak penyedia jasa dalam pencatatan setiap transaksi yang terjadi hingga pada pembuatan laporan. Dari hasil yang didapat dari pengujian fungsionalitas terhadap sistem, dapat disimpulkan bahwa sistem yang dibuat dapat bekerja berdasarkan fungsinya dan sesuai dengan harapan.",
            documents: [
                {
                    "url": "https://drive.google.com/file/d/1D6myizuXKc2a8vuWUdsn46R41W0SLV2x/view?usp=share_link",
                    "name": "Buku TA"
                },
                {
                    "url": "https://drive.google.com/file/d/1NjG-oQvJQ8eF3xs2sgOLZU-FI3hw9waV/view?usp=share_link",
                    "name": "Presentasi TA"
                }
            ],
            images: [
                "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/49.png",
                "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/50.png",
                "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/51.png",
                "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/52.png",
                "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/53.png",
            ],
            tech: {
                connect: [ { id: 28 }, { id: 29 } ]
            },
            researchField: {
                connect: [ { id: 3 } ]
            },
            // method: {
            //     connect: [ { id: 27 } ]
            // },
            student: {
                create: {
                    name: "Dwi Nur Azizah",
                    nrp: "3120550046",
                    image: "https://etapens-storage140101-dev.s3.ap-southeast-1.amazonaws.com/public/dummy/54.png",
                    bio: "Bio data Mahasiswa",
                    user: {
                        create: {
                            username: "dwinurazizah",
                            email: "dwinurazizah@it.student.pens.ac.id",
                            role: 'Student'
                        }
                    },
                }
            },
            lecturers: {
                create: [
                    {
                        name: "Fadilah Fahrul Hardiansyah,S.ST., M. Kom.",
                        nip: "198901292019031013",
                        user: {
                            create: {
                                username: "fahrul",
                                email: "fahrul@pens.ac.id",
                                role: 'Lecturer'
                            }
                        }
                    }, {
                        name: "Nana Ramadijanti, S.Kom, M.Kom",
                        nip: "197111091998022001",
                        user: {
                            create: {
                                username: "nana",
                                email: "nana@pens.ac.id",
                                role: 'Lecturer'
                            }
                        }
                    },
                ]
                // connect: [ { id: 2 } ]
            }
        }
    } )

    return result
}