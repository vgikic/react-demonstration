export default interface ISignInResponse {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: number,
    localId: string
}