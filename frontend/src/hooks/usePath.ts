import { usePathname } from "next/navigation"

export const useGetPathName = () => {
    const pathName = usePathname()

    if (pathName === "/") {
        return { firstPath: "", secondPath: "" };
    }

    const splittedPath = pathName.split('/')
    const tempFirstPath = splittedPath[1].split('')[0].toUpperCase() + splittedPath[1].slice(1)
    const firstPath = tempFirstPath.replace('-', ' ')

    let secondPath = ""
    if (splittedPath[2]) {
        const tempSecondPath = splittedPath[2]
        const separatedWords = tempSecondPath.split('-')
        secondPath = separatedWords.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    return {
        firstPath,
        secondPath
    }
}