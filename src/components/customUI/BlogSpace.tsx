import { Fragment } from "react"

type IntroProps = {
    text: string,
    description: string
}

export const Intro = ({text,description}:IntroProps) => {
    return (
        <Fragment>
            <h1 className="mt-4 mb-2 text-xl font-semibold text-gray-900 dark:text-white">{text}</h1>
            <p  className="mb-2 font-normal text-gray-500 dark:text-gray-400">{description}</p>
        </Fragment>
    )
}