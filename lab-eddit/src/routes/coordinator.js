
export const goToHome = (navigate) => {
    navigate("/home")
}

export const goToCadastre = (navigate) => {
    navigate("/cadastre")
}

export const goToFeedPage = (navigate) => {
    navigate("/posts")
}

export const goToFeedComments = (navigate, id) => {
    navigate(`/comments/${id}`)
}
