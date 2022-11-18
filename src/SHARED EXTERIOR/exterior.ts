import { Scene } from "../congif/core/scene"
import { SceneController } from "../congif/core/sceneController"
import { SceneLocations } from "../congif/enums"
import { movePlayerToVector3 } from "../utils/movePlayerToVector3"
import { ExitPlane } from "../utils/exitPlane"
import { Dash_Material, Dash_Tweaker } from "dcldash";



class ExteriorInstance extends Scene {

    //KPMG
    //environment
    // private exteriorEntity = new Entity()
    // private exteriorInnerEntity = new Entity()
    //utils
    private triggerDoor1 = new ExitPlane()
    private triggerDoor2 = new ExitPlane()
    private triggerDoor3 = new ExitPlane()
    private triggerDoor4 = new ExitPlane()
    private triggerDoor5 = new ExitPlane()
    private triggerDoor6 = new ExitPlane()
    private triggerDoor7 = new ExitPlane()
    private triggerDoor8 = new ExitPlane()

    //KB-HOMES
    //environment
    private kbExterior = new Entity()
    //utils
    private triggerDoor9 = new ExitPlane()
    private triggerDoor10 = new ExitPlane()
    private triggerDoor11 = new ExitPlane()



    constructor() {
        super(SceneLocations.Exterior)
        // this.addComponent(new GLTFShape('models/KPMG/exterior/KPMG_exterior_collider.glb'))
        // this.exteriorEntity.addComponent(new GLTFShape('models/KPMG/exterior/KPMG_exterior_Geo1B.glb'))
        // this.exteriorInnerEntity.addComponent(new GLTFShape('models/KPMG/exterior/KPMG_exterior_innerGeo.glb'))

        this.kbExterior.addComponent(new GLTFShape("models/KB-HOMES/exterior/KBH-exterior.glb"))

        // this.exteriorEntity.setParent(this)
        // this.exteriorInnerEntity.setParent(this)
        this.kbExterior.setParent(this)

        // this.triggerPortalKPMG()
        this.triggerPortalKBHomes()
    }

    triggerPortalKPMG() {
        [this.triggerDoor1, this.triggerDoor2, this.triggerDoor3, this.triggerDoor4,
        this.triggerDoor5, this.triggerDoor6, this.triggerDoor7, this.triggerDoor8
        ].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor1.addComponentOrReplace(new Transform({
            position: new Vector3(37.99, 2.28, 17.73),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 100.000, 2.000),
        }))
        this.triggerDoor1.onCameraEnter = () => this.enterKPMG(
            new Vector3(24.73, 0.98, 40.71),
            new Vector3(24.22, 0.98, 39.74),
        )
        this.triggerDoor2.addComponentOrReplace(new Transform({
            position: new Vector3(37.08, 2.28, 29.47),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 100.000, 2.000),
        }))
        this.triggerDoor2.onCameraEnter = () => this.enterKPMG(
            new Vector3(10.47, 0.98, 36.87),
            new Vector3(11.39, 0.98, 36.27),
        )
        this.triggerDoor3.addComponentOrReplace(new Transform({
            position: new Vector3(29.09, 2.28, 36.65),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 180.000, 2.000),
        }))
        this.triggerDoor3.onCameraEnter = () => this.enterKPMG(
            new Vector3(5.63, 0.98, 24.99),
            new Vector3(23.93, 0.98, 41.51),
        )
        this.triggerDoor4.addComponentOrReplace(new Transform({
            position: new Vector3(18.23, 2.28, 37.25),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 170.000, 2.000),
        }))
        this.triggerDoor4.onCameraEnter = () => this.enterKPMG(
            new Vector3(11.00, 0.98, 10.28),
            new Vector3(23.93, 0.98, 41.51),
        )
        this.triggerDoor5.addComponentOrReplace(new Transform({
            position: new Vector3(11.02, 2.28, 29.08),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 130.000, 2.000),
        }))
        this.triggerDoor5.onCameraEnter = () => this.enterKPMG(
            new Vector3(23.25, 0.98, 5.88),
            new Vector3(23.93, 0.98, 41.51),
        )
        this.triggerDoor6.addComponentOrReplace(new Transform({
            position: new Vector3(9.95, 2.28, 18.19),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 70.000, 2.000),
        }))
        this.triggerDoor6.onCameraEnter = () => this.enterKPMG(
            new Vector3(35.83, 0.98, 11.23),
            new Vector3(23.93, 0.98, 41.51),
        )
        this.triggerDoor7.addComponentOrReplace(new Transform({
            position: new Vector3(19, 2.28, 11.50),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 30.000, 2.000),
        }))
        this.triggerDoor7.onCameraEnter = () => this.enterKPMG(
            new Vector3(42.89, 0.98, 23.09),
            new Vector3(23.93, 0.98, 41.51),
        )
        this.triggerDoor8.addComponentOrReplace(new Transform({
            position: new Vector3(29.38, 2.28, 10.47),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(1.000, 170.000, 2.000),
        }))
        this.triggerDoor8.onCameraEnter = () => this.enterKPMG(
            new Vector3(37.87, 0.98, 36.39),
            new Vector3(23.93, 0.98, 41.51),
        )
    }
    triggerPortalKBHomes() {
        [this.triggerDoor9, this.triggerDoor10, this.triggerDoor11
        ].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.triggerDoor9.addComponentOrReplace(new Transform({
            position: new Vector3(63.53, 1.51, 3),
            scale: new Vector3(7.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
        }))

        this.triggerDoor9.onCameraEnter = () => this.enterKBHomes(
            new Vector3(32.02, 1.68, 76.38),
            new Vector3(31.21, 1.68, 67.06),
        )
        this.triggerDoor10.addComponentOrReplace(new Transform({
            position: new Vector3(50, 2, 16.39),
            scale: new Vector3(7.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(0.000, 90.000, 0.000),
        }))

        this.triggerDoor10.onCameraEnter = () => this.enterKBHomes(
            new Vector3(32.02, 1.68, 76.38),
            new Vector3(31.21, 1.68, 67.06),
        )
        this.triggerDoor11.addComponentOrReplace(new Transform({
            position: new Vector3(77.500, 2.800, 17.090),
            scale: new Vector3(15.800, 4.000, 10.000),
            rotation: new Quaternion().setEuler(0.000, 90.000, 0.000),
        }))

        this.triggerDoor11.onCameraEnter = () => this.enterKBHomes(
            new Vector3(32.02, 1.68, 76.38),
            new Vector3(31.21, 1.68, 67.06),
        )

    }
    enterKPMG(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KPMGInterior)
        movePlayerToVector3(position, direction)
    }
    enterKBHomes(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KBCulDeSac)
        movePlayerToVector3(position, direction)
    }
}


export const Exterior = new ExteriorInstance()