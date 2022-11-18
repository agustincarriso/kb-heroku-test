import { Dash_Material, Dash_Tweaker, Dash_Wait } from "dcldash"
import { Scene } from "../../congif/core/scene"
import { SceneController } from "../../congif/core/sceneController"
import { SceneLocations } from "../../congif/enums"
import { ExitPlane } from "../../utils/exitPlane"
import { movePlayerToVector3 } from "../../utils/movePlayerToVector3"

class KPMGRetailInstance extends Scene {
    //Environment
    private retailSpaceMainGeo = new Entity()
    private retailFurniture = new Entity()
    private furnitureCol = new Entity()
    private retailClickeable = new Entity()
    private flowerDisplay = new Entity()
    //utils
    private exitDoor =new ExitPlane()


    constructor() {
        super(SceneLocations.KPMGRetail)
        this.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_collider.glb'))
        this.retailSpaceMainGeo.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_geo.glb'))
        this.retailFurniture.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_furniture.glb'))
        this.furnitureCol.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_furniture_collider.glb'))
        this.retailClickeable.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_clickable_collider.glb'))
        this.flowerDisplay.addComponent(new GLTFShape('models/KPMG/retail/KPMG_Retail_flower_display.glb'))

        this.retailSpaceMainGeo.setParent(this)
        this.retailFurniture.setParent(this)
        this.furnitureCol.setParent(this)
        this.retailClickeable.setParent(this)
        this.flowerDisplay.setParent(this)
        this.exitDoorPortal()
        
    }
    clickeable(){
        
    }
    preload() {
        engine.addEntity(this)
        log('preloaded retailSpace!')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('Event space Preload Removed.')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }
    exitDoorPortal() {
        [this.exitDoor,
        ].forEach(ExitPlane => {
            ExitPlane.addComponent(Dash_Material.transparent())
            ExitPlane.setParent(this)
        })

        this.exitDoor.addComponentOrReplace(new Transform({
            position: new Vector3(77.80,1.3,20.17),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(0.000, 90.000, 0.000),
        }))
        this.exitDoor.onCameraEnter = () => this.goInterior(
            new Vector3(17.48,0.98,6.15),
            new Vector3(32.15, 1.33, 4.72),
        )
        

    }
    goInterior(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KPMGInterior)
        movePlayerToVector3(position, direction)
    }

}

export const KPMGRetail= new KPMGRetailInstance()