declare const domain : string;

const myHeaders = new Headers();
myHeaders.append("Accept", "application/vnd.api+json");
myHeaders.append("Content-Type", "application/vnd.api+json ");
const requestOptions = {
    method: 'GET',
    headers: myHeaders,
};

export const getUser = async (userID: string) => {
    const response = await fetch(`${domain}/jsonapi/user/user/${userID}`, requestOptions).then(response => response.json()).catch((error) => console.log(error));
    const userName = response.data.attributes.display_name;
    return userName;
}
