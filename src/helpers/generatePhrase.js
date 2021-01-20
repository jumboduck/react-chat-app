/** Generate an incoming message by connecting to the randomtext.me API */

const generatePhrase = () => {
    return fetch("https://www.randomtext.me/api/gibberish/p-1/1-10/")
        .then((response) => response.json())
        .then((data) => {
            return data.text_out.replace(/(<([^>]+)>(\\r)?)/gi, "");
        });
};

export default generatePhrase;
