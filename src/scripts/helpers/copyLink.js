export const CopyLink = async (link) => {
    console.log("link", link)
    await navigator.clipboard.writeText(link)
}