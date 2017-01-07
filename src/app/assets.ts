import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {JsonProperty} from "json-typescript-mapper";
 

export class Assets {    

    '@id' = this.id;
    id: number;
    '@uri' = this.uri;
    uri: string;
    firstLine: number;
    assetTypeId: number;
    assetTypeName: string;
    categoryTitle: string;
    description: string;
    imageUrl: string;
    $: any;
    archive: string;
}



