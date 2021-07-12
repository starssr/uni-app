import { UniNodeJSON } from '@dcloudio/uni-shared'
import '../../../../../style/video.css'
import Video from '../../../components/video'

import { UniComponent } from './UniComponent'

export class UniVideo extends UniComponent {
  constructor(id: number, nodeJson: Partial<UniNodeJSON>) {
    super(id, 'uni-video', Video, nodeJson)
  }
}
