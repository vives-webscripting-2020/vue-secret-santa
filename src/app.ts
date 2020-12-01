import { createApp } from 'vue'
import shuffle from 'lodash.shuffle'

console.log("hello world")

const vue = createApp({
    data() {
        return {
            name: '',
            names: [],
            shuffledNames: []
        }
    },
    methods: {
        addName() {
            this.names.push(this.name)
            this.name = ''
        },
        shuffleNames() {
            this.shuffledNames = []
            const fromNames = shuffle(this.names)
            const toNames = [...fromNames]
            toNames.push(toNames.shift())

            for(let i = 0; i < fromNames.length; i++) {
                const pair = {
                    from: fromNames[i],
                    to: toNames[i]
                }
                this.shuffledNames.push(pair)
            }
        }
    }
})

vue.mount('#app')
