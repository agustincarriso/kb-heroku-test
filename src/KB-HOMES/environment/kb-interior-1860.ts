import { Dash_Material, Dash_Tweaker, Dash_Wait } from "dcldash"
import { Scene } from "src/congif/core/scene"
import { SceneController } from "src/congif/core/sceneController"
import { SceneLocations } from "src/congif/enums"
import { ExitPlane } from "src/utils/exitPlane"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"


class KBInterior1860Instance extends Scene {
    //environment
    private kbInterior1860Geo = new Entity()
    private kbInterior1860Furniture = new Entity()
    private kbInterior1860Yard = new Entity()
    //utils
    private kbInterior1860ExitDoor = new ExitPlane()
    constructor() {
        super(SceneLocations.KBInterior1860)
        this.addComponent(new GLTFShape("models/KB-HOMES/interior-1860/KBH_Interior_model1860_collider.glb"))
        this.kbInterior1860Geo.addComponent(new GLTFShape('models/KB-HOMES/interior-1860/KBH_Interior_model1860_MainGeo.glb'))
        this.kbInterior1860Furniture.addComponent(new GLTFShape('models/KB-HOMES/interior-1860/KBH_Interior_model1860_furniture.glb'))
        this.kbInterior1860Yard.addComponent(new GLTFShape('models/KB-HOMES/interior-1860/KBH_Interior_model1860_Yard.glb'))


        this.kbInterior1860Geo.setParent(this)
        this.kbInterior1860Furniture.setParent(this)
        this.kbInterior1860Yard.setParent(this)

        this.createExitDoor()

    }
    preload() {
        engine.addEntity(this)
        log('kb interior preloaded')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('kb interior Removed.')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }
    createExitDoor() {
        [this.kbInterior1860ExitDoor].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.kbInterior1860ExitDoor.addComponentOrReplace(new Transform({
            position: new Vector3(22.520, 1.180, 30.940),
            scale: new Vector3(3.400, 1.400, 3.000),
            rotation: new Quaternion().setEuler(1.000, 341.000, 92.000),
        }))
        this.kbInterior1860ExitDoor.onCameraEnter = () => this.exitToCulDeSac(
            new Vector3(46.91, 1.03, 25.59),
            new Vector3(42.24, 0.88, 33.10),
        )
    }
    exitToCulDeSac(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KBCulDeSac)
        movePlayerToVector3(position, direction)
    }

}

export const KBInterior1860 = new KBInterior1860Instance()