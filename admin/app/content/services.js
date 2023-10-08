import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { body } from '../fields/body.js'
import { featured_image } from '../fields/featured-image.js'
import {t} from "../module/services/i18n/translater.js";

const services = {
    name: 'expertises',
    label: t.content.services.label,
    label_singular: t.content.services.label_singular,
    folder: 'content/services',
    create: true,
    description: t.content.services.description,

    editor: { preview: false },
    i18n: true,

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },
    
    slug: '{{slug}}',
    sortable_fields: ['title'],
    summary: '{{title}}',

    fields: [
        isNotIndex,
        draft,
        title,
        description,
        body,
        featured_image
    ]
}

export default services