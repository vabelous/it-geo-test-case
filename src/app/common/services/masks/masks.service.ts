import { Injectable } from '@angular/core';
import { dateMask } from 'app/common/masks/date.mask';
import { INN10DgMask } from 'app/common/masks/inn-10dg.mask';
import { INN12DgMask } from 'app/common/masks/inn-12dg.mask';
import { KPPMask } from 'app/common/masks/kpp.mask';
import { OGRNMask } from 'app/common/masks/ogrn.mask';
import { OKPOMask } from 'app/common/masks/okpo.mask';
import { OKVEDMask } from 'app/common/masks/okved.mask';
import { phoneMask } from 'app/common/masks/phone.mask';


@Injectable({ providedIn: 'root' })
export class MasksService {

    constructor() {}

    public getMaskByName(name: string): InputMask {
        switch (name) {
			case "dateMask":
                return dateMask;
            case "INN10DgMask":
                return INN10DgMask;
            case "INN12DgMask":
                return INN12DgMask;
            case "KPPMask":
                return KPPMask;
            case "OGRNMask":
                return OGRNMask;
            case "OKPOMask":
                return OKPOMask;
            case "OKVEDMask":
                return OKVEDMask;
            case "phoneMask":
                return phoneMask;
			default:
				throw new Error(('Unknown kind of mask!'));
		}

    }

}