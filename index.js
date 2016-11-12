function typeSafe( func, argTypes, returnType ) {
  var newFunc = function() {
    if ( arguments.length !== argTypes.length ) {
      throw new TypeError();
    }

    var type;

    for ( let i = 0; i < arguments.length; i++ ) {
      if ( arguments[ i ] === null ) {
        type = 'null';
      } else if ( Array.isArray( arguments[ i ] ) ) {
        type = 'array';
      } else {
        type = typeof( arguments[ i ] );
      }

      if ( type !== argTypes[ i ] ) {
        throw new TypeError();
      }
    }

    var result = func.apply( null, arguments );console.log(result);
    var resultType;

    if ( result === null ) {
      resultType = 'null';
    } else if ( Array.isArray( result ) ) {
      resultType = 'array';
    } else {
      resultType = typeof( result );
    }

    if ( resultType !== returnType ) {
      throw new TypeError();
    }

    return result;
  };

  return newFunc;
}

module.exports = typeSafe;
