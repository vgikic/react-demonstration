export default interface IAccountPayload {
    isAuthenticated: boolean,
    token: string,
    expiresIn: string,
    refreshToken: string
}