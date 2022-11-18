import { KBCulDeSac } from "src/KB-HOMES/environment/kb-cul-de-sac"
import { KBInterior1860 } from "src/KB-HOMES/environment/kb-interior-1860"
import { KBInterior1989 } from "src/KB-HOMES/environment/kb-interior-1989"
import { KPMGBank } from "src/KPMG/environment/kpmg-bank"
import { KPMGEvent } from "src/KPMG/environment/kpmg-eventSpace"
import { KPMGInterior } from "src/KPMG/environment/kpmg-interior"
import { KPMGRetail } from "src/KPMG/environment/kpmg-retail"
import { Exterior } from "src/SHARED EXTERIOR/exterior"
import { Scene } from "./core/scene"
import { SceneLocations } from "./enums"



export const SceneEntities: {[key: number] : Scene } = {
    //KPMG
    [SceneLocations.Exterior]: Exterior,
    [SceneLocations.KPMGInterior]: KPMGInterior,
    [SceneLocations.KPMGEvent]: KPMGEvent,
    [SceneLocations.KPMGBank]: KPMGBank,
    [SceneLocations.KPMGRetail]: KPMGRetail,
    //KB-HOMES
    [SceneLocations.KBCulDeSac]: KBCulDeSac,
    [SceneLocations.KBInterior1860]: KBInterior1860,
    [SceneLocations.KBInterior1989]: KBInterior1989,

}

export const getSceneEntityFromLocation = (location: SceneLocations) : (Scene | undefined) => {
    return SceneEntities[location]
}