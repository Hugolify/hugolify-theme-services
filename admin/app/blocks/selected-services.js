import { heading } from '../fields/heading.js'
import { projects } from '../fields/projects.js'
import { show_more } from '../fields/show-more.js'
import { background } from '../fields/background.js'
import {t} from "../module/services/i18n/translater.js";

export const block_selectedservices = {
    name: 'selected-services',
    label: t.blocks.services ,
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{heading.title}}',
    fields: [
        heading,
        { name: 'section', default: 'services', widget: 'hidden' },
        projects,
        show_more,
        background
    ]
}