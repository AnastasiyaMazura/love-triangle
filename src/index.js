/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    for(var i = 0; i < preferences.length; i++)
    {
        preferences[i] = preferences[i] - 1;
    }
    for(i = 0; i < preferences.length; i++)
    {
        if(preferences[i] < preferences.length && i != preferences[i])
        {
            if(preferences[preferences[i]] < preferences.length)
            {
                if(preferences[preferences[preferences[i]]] == i)
                    count++;
            }
        }
    }
    count = count/3;
    return count;
};
