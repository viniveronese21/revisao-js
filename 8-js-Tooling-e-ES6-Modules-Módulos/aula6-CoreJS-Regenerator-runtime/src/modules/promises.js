function promise(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello World!');
            resolve();
        },2000)
    });
}

export default async function() {
    await promise();
    console.log('Terminou');
}