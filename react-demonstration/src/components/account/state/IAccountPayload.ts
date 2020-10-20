export default interface IAccountPayload {
    isAuthenticated: boolean,
    token: string,
    expiresIn: number,
    refreshToken: string
}