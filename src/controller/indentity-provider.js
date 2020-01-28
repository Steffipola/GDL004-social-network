import {
    logInWithProvider
} from "../model/firebase.js";

export const loadProvider = {
    triggerLogin: () => {
        document.querySelector('#fbLogIn').addEventListener('click', () => {
            logInWithProvider.Providers(1);
        });
        document.querySelector('#twitterLogIn').addEventListener('click', () => {
            logInWithProvider.Providers(2);
        });
        document.querySelector('#googleLogIn').addEventListener('click', () => {
            logInWithProvider.Providers(3);
        });
        document.querySelector('#githubLogIn').addEventListener('click', () => {
            logInWithProvider.Providers(4);
        });
    }
};