import { Dash_Material, Dash_Tweaker, Dash_Wait } from "dcldash"
import { Scene } from "src/congif/core/scene"
import { SceneController } from "src/congif/core/sceneController"
import { SceneLocations } from "src/congif/enums"
import { ExitPlane } from "src/utils/exitPlane"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"
import { TriggerButton } from "src/utils/triggerButton"


class KBCulDeSacInstance extends Scene {

    //environment
    private kBCulDeSacGeo = new Entity()
    private KbCulDeSacLandScape = new Entity()
    private elevation1860 = new Entity()
    private elevation2597 = new Entity()
    private elevation1989 = new Entity()

    //utils
    private triggerDoor1860 = new ExitPlane()
    private triggerElevation1860Button3 = new TriggerButton()
    private triggerElevation1860Button2 = new TriggerButton()
    private triggerGeneralButton1860 = new TriggerButton()

    private triggerDoor1989 = new ExitPlane()
    private triggerSpanishButton1989 = new TriggerButton()
    private triggerCraftsmanButton1989 = new TriggerButton()
    private triggerGeneralButton1989 = new TriggerButton()

    constructor() {
        super(SceneLocations.KBCulDeSac)
        this.addComponent(new GLTFShape("models/KB-HOMES/Cul-de-Sac/KBH_Cul-de-sac_collider.glb"))
        this.kBCulDeSacGeo.addComponent(new GLTFShape('models/KB-HOMES/Cul-de-Sac/KBH_Cul-de-sac_geo.glb'))
        this.KbCulDeSacLandScape.addComponent(new GLTFShape("models/KB-HOMES/Cul-de-Sac/KBH_Cul-de-sac_landscape.glb"))
        this.elevation1860.addComponent(new GLTFShape('models/KB-HOMES/Cul-de-Sac/KBH_Elevation_1860_1.glb'))
        this.elevation2597.addComponent(new GLTFShape('models/KB-HOMES/Cul-de-Sac/KBH_Elevation_2597_1.glb'))
        this.elevation1989.addComponent(new GLTFShape('models/KB-HOMES/Cul-de-Sac/KBH_Elevation_1989_1.glb'))

        this.kBCulDeSacGeo.setParent(this)
        this.KbCulDeSacLandScape.setParent(this)
        this.elevation1860.setParent(this)
        this.elevation2597.setParent(this)
        this.elevation1989.setParent(this)

        this.triggerDoors1860()
        this.triggerDoors1989()
        this.createTriggerButtons()
    }
    preload() {
        engine.addEntity(this)
        log('preloaded culdesac!')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('cul de sac removed')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }
    triggerDoors1860() {
        [this.triggerDoor1860].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor1860.addComponentOrReplace(new Transform({
            position: new Vector3(49.200, 1.280, 23.820),
            scale: new Vector3(1.400, 2.000, 3.000),
            rotation: new Quaternion().setEuler(1.000, 311.000, 2.000),
        }))
        this.triggerDoor1860.onCameraEnter = () => this.enter1860(
            new Vector3(22.73, 1.18, 27.68),
            new Vector3(22.51, 1.18, 21.04),
        )
    }
    enter1860(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KBInterior1860)
        movePlayerToVector3(position, direction)
    }
    triggerDoors1989() {
        [this.triggerDoor1989].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor1989.addComponentOrReplace(new Transform({
            position: new Vector3(16.310, 1.680, 23.640),
            scale: new Vector3(4.400, 2.000, 3.000),
            rotation: new Quaternion().setEuler(1.000, 41.000, 2.000),
        }))
        this.triggerDoor1989.onCameraEnter = () => this.enter1989(
            new Vector3(19.17, 1.18, 22.75),
            new Vector3(19.39, 1.18, 23.06),
        )

    }
    enter1989(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KBInterior1989)
        movePlayerToVector3(position, direction)
    }
    createTriggerButtons() {
        [this.triggerSpanishButton1989, this.triggerCraftsmanButton1989, this.triggerGeneralButton1989,
        this.triggerGeneralButton1860, this.triggerElevation1860Button2, this.triggerElevation1860Button3].forEach(models => {
            models.setParent(this)
        })
        //1989
        this.triggerSpanishButton1989.addComponentOrReplace(new Transform({
            position: new Vector3(20.400, 0.480, 26.070),
            scale: new Vector3(0.400, 0.300, 0.200),
            rotation: new Quaternion().setEuler(90.000, 127.048, 0.000),
        }))
        this.triggerSpanishButton1989.onClick = () => this.spanish1989()
        this.triggerSpanishButton1989.setMessage("Spanish")

        this.triggerCraftsmanButton1989.addComponentOrReplace(new Transform({
            position: new Vector3(20.130, 0.480, 26.280),
            scale: new Vector3(0.400, 0.300, 0.200),
            rotation: new Quaternion().setEuler(90.000, 127.048, 0.000),
        }))
        this.triggerCraftsmanButton1989.onClick = () => this.craftsman1989()
        this.triggerCraftsmanButton1989.setMessage("Craftsman")

        this.triggerGeneralButton1989.addComponentOrReplace(new Transform({
            position: new Vector3(20.680, 0.480, 25.860),
            scale: new Vector3(0.400, 0.300, 0.200),
            rotation: new Quaternion().setEuler(90.000, 126.048, 0.000),
        }))
        this.triggerGeneralButton1989.onClick = () => this.general1989()
        this.triggerGeneralButton1989.setMessage("General")
        //1860
        this.triggerGeneralButton1860.addComponentOrReplace(new Transform({
            position: new Vector3(44.200, 0.330, 27.630),
            scale: new Vector3(0.400, 0.300, 0.200),
            rotation: new Quaternion().setEuler(350.000, 136.048, 360.000),
        }))
        this.triggerGeneralButton1860.onClick = () => this.general1860()
        this.triggerGeneralButton1860.setMessage("Option 1")

        this.triggerElevation1860Button2.addComponentOrReplace(new Transform({
            position: new Vector3(43.800, 0.330, 27.230),
            scale: new Vector3(0.400, 0.300, 0.200),
            rotation: new Quaternion().setEuler(350.000, 136.048, 360.000),
        }))
        this.triggerElevation1860Button2.onClick = () => this.option21860()
        this.triggerElevation1860Button2.setMessage("Option 2")

        this.triggerElevation1860Button3.addComponentOrReplace(new Transform({
            position: new Vector3(43.400, 0.330, 26.830),
            scale: new Vector3(0.400, 0.300, 0.200),
            rotation: new Quaternion().setEuler(350.000, 136.048, 360.000),
        }))
        this.triggerElevation1860Button3.onClick = () => this.option31860()
        this.triggerElevation1860Button3.setMessage("Option 3")

        Dash_Tweaker(this.triggerElevation1860Button3)

    }
    spanish1989() {
        log("spanish house")
        this.elevation1989.addComponentOrReplace(new GLTFShape("models/KB-HOMES/Cul-de-Sac/KBhomes_1989_elevation_spanish.glb"))
    }
    craftsman1989() {
        log("craftsman house")
        this.elevation1989.addComponentOrReplace(new GLTFShape("models/KB-HOMES/Cul-de-Sac/KBhomes_1989_elevation_craftsman.glb"))
    }
    general1989() {
        log("general house")
        this.elevation1989.addComponentOrReplace(new GLTFShape('models/KB-HOMES/Cul-de-Sac/KBH_Elevation_1989_1.glb'))
    }
    general1860() {
        this.elevation1860.addComponentOrReplace(new GLTFShape('models/KB-HOMES/Cul-de-Sac/KBH_Elevation_1860_1.glb'))
    }
    option21860() {
        this.elevation1860.addComponentOrReplace(new GLTFShape('models/KB-HOMES/Cul-de-Sac/KBH_Elevation_1860_2.glb'))
    }
    option31860() {
        this.elevation1860.addComponentOrReplace(new GLTFShape('models/KB-HOMES/Cul-de-Sac/KBH_Elevation_1860_3.glb'))
    }
}

export const KBCulDeSac = new KBCulDeSacInstance()