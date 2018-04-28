///<reference path="../../node_modules/@angular/router/src/interfaces.d.ts"/>
import {CanDeactivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<Router>{

    constructor(private _router:Router){}

    canDeactivate(){
        return window.confirm("You have unsaved changes. Still want to leave?");

    }
}