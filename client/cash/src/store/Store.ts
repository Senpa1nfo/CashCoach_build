import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import AddService from "../services/AddService";

export default class Store {
    user = {} as IUser;
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);  
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error); 
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error);
        }
    }

    async logout() {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (error) {
            console.log(error); 
        }
    }

    async sendLink() {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await AuthService.sendLink();
        } catch (error) {
            console.log(error);           
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});         
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error);
        }
    }

    async add(description: string, value: string, bool: boolean) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await AddService.add(description, value, bool);
        } catch (error) {
            console.log(error);
        }
    }

    async delete(_id: string) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await AddService.delete(_id);
        } catch (error) {
            console.log(error);
        }
    }

    async edit(_id: string, description: string, value: string, bool: boolean) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await AddService.edit(_id, description, value, bool);
        } catch (error) {
            console.log(error);
        }
    }

    async generate_list() {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await AddService.generate_list();
            return response.data;      
        } catch (error) {
            console.log(error);
        }
    }
}