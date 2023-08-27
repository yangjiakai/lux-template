

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi, aliases } from 'vuetify/iconsets/mdi'
export default createVuetify({
    components,
    directives,
    icons: {
        aliases,
        sets: {
            mdi,
        },
    },
})

