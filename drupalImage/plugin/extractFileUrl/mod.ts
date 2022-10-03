declare const domain : string;

const myHeaders = new Headers();
myHeaders.append("Accept", "application/vnd.api+json");
myHeaders.append("Content-Type", "application/vnd.api+json ");
const requestOptions = {
    method: 'GET',
    headers: myHeaders,
};

export const extractFileUrl = async (mediaID: string) => {
    const response = await fetch(`${domain}/jsonapi/file/file/${mediaID}`, requestOptions).then(response => response.json()).catch((error) => console.log(error));
    const mediaPartialUrl = response.data.attributes.uri.url;
    const fullMediaUrl = `${domain}${mediaPartialUrl}`;
    console.log(fullMediaUrl);
    return fullMediaUrl;
}