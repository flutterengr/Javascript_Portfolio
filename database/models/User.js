module.exports = (sequelize,DataTypes)=>{
    const alias = "User"
    const cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        rol: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: "users",
        timestamps: false
    }
    
    
    return sequelize.define(alias,cols,config);
     

}