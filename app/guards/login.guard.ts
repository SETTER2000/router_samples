import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {

//    canActivate(destination: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//       console.log(destination.component.name);
    canActivate(destination: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
        // console.log('Переход куда хочет перейти пользователь: ',destination.component.name);

        return this.checkIfLoggedIn();
    }

    private checkIfLoggedIn(): boolean {

        // Здесь будет находиться вызов сервиса авторизации
        // Сейчас же мы будем возвращать значение true или false,
        // выбранное случайным образом

        let loggedIn: boolean = Math.random() < 0.5;

        if (!loggedIn) {
            console.log("LoginGuard: The user is not logged in and can't navigate to product details");
        }

        return loggedIn;
    }
}