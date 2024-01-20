const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient();

(async () => {
    try {
        await db.category.createMany({
            data: [
                {
                    name: 'Computer Science',
                },
                {
                    name: 'Music',
                },
                {
                    name: 'Fitness',
                },
                {
                    name: 'Photography',
                },
                {
                    name: 'Accounting',
                },
                {
                    name: 'Engineering',
                },
                {
                    name: 'Filming',
                },
            ]
        })
    
    console.log('categories seeded')
} catch (error) {
        console.log(error)
    } finally {
        await db.$disconnect();
    }
})();