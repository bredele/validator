
# validator


## Installation

  Install with [component](http://component.io):

    $ component install bredele/validator


## Usage

```js
  var Validator = require('validator'),
  	  validateor = new Validator();

  //add validators
  validator.add('nickname', function(val) {
    return val === 'bredele';
  });

	//get notify when everything is valid (going to be refactored)
  validator.doors.on('open', function(){
    //is valid
  });

  validator.set('nickname', 'olivier'); //false
  validator.set('nickname', 'bredele'); //true
```

## API

### Validator.add(name:String, callback:Function, required:Boolean)

  Add validator. The argument `required` is optional (true by default).


### Validator.set(name:String, value)

  Validate value. Return true if valid.


## License

  MIT
