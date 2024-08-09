# Nameste React 

# parcel
- Dev build
- Local server
- HMR : Hot module replacement
- using File Watching Algorithum : written in C++
- Caching : Faster builds
- Image Optimization
- Minification
- Bundling 
- Compress
- Consistant hashing
- code spiltting
- Differential bundling : support older browser
- Error handling
- Tree shaking : removed unused code

# App structure
/**
 * - Header
 *      - logo  
 *      - Nav Items
 * - Body
 *      - Search
 *      - Restro container
 *          - Restro card
 *              - Img
 *              - Name or res, star, cusine, delery time
 * - Footer
 *      - Copy right
 *      - Links
 *      - Address
 *      - Contact
 */

 # type of testing
 - unit testing
 - integration testing
 - end to end testing (e2e testing)

 # setting up testing in our application
 - install RTL (react testing library)
 - install jest
 - install babel dependencies
 - configure babel
 - cofigure parcel config file to disable default babel transpilation
 - jest - npx jest --init
 - install jsdom library
 - install @babel/preset-react to make jsx work in test cases
 - include @babel/preset-react inside my babel config
 - install npm i -D @testing-library/jest-Dom