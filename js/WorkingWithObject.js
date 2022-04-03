//Object in JS is mutable because it's reference type, therefore be careful while interact with it.

//Best practices to clone an object

const food = { beef: 'beef', bacon: 'bacon' };

//Using Spread
//Using spread will clone your object. Note this will be a shallow copy. As of this post, the spread operator for cloning objects is in Stage 4. So it's not officially in the specifications yet. So if you were to use this, you would need to compile it with Babel (or something similar).

const cloneFood1 = { ...food };

//Using Object.assign   
//Alternatively, Object.assign is in the official released and will also create a shallow copy of the object.
//Note the empty {} as the first argument, this will ensure you don't mutate the original object 

const cloneFood2 = Object.assign({}, food);

//Fallback: We cannot use Spread and Object.assign() method to make a complete copy of a nested object which has some child objects inside
//When using these two method with a nested object, the child objects are still coupled with the origin object;
//Solution: JSON.stringify()
//This final way will give you a deep copy. Now I will mention, this is a quick and dirty way of deep cloning an object. For a more robust solution, I would recommend using something like lodash

const cloneFood3 = JSON.parse(JSON.stringify(food));


