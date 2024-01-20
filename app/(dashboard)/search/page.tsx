import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const SearchPage = () => {

    const mockData = [
        {
            cardTitle: "What is Lorem Ipsum?",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cardFooter: "What is Lorem Ipsum?",
            cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            cardTitle: "What is Lorem Ipsum?",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cardFooter: "What is Lorem Ipsum?",
            cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            cardTitle: "What is Lorem Ipsum?",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cardFooter: "What is Lorem Ipsum?",
            cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }, {
            cardTitle: "What is Lorem Ipsum?",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cardFooter: "What is Lorem Ipsum?",
            cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            cardTitle: "What is Lorem Ipsum?",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cardFooter: "What is Lorem Ipsum?",
            cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            cardTitle: "What is Lorem Ipsum?",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cardFooter: "What is Lorem Ipsum?",
            cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            cardTitle: "What is Lorem Ipsum?",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cardFooter: "What is Lorem Ipsum?",
            cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }, {
            cardTitle: "What is Lorem Ipsum?",
            cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cardFooter: "What is Lorem Ipsum?",
            cardContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        
    ];
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {mockData.map((data, index) => {
                return (
                    <div className="" key={index}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{data.cardTitle}</CardTitle>
                                <CardDescription>{data.cardDescription}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    {data.cardContent}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p>{data.cardFooter}</p>
                            </CardFooter>
                        </Card>
                    </div>
                )
            })}
        </div>
    );
}

export default SearchPage
    ;
