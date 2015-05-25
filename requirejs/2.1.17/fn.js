define(function () {
	var gname; // 相当于模块的静态变量
	return function (name) {
		console.log("test define function");
		// 模块的实例变量
		this.name = name;
		gname = name;

		this.getName = function(){
			return this.name;
		};

		this.setName = function(name){
			this.name = name;
		}

		this.getGname = function(){
			return gname;
		};
	}
});

/* test
 require(['modules/bs/gis/gps/test'], function (map, test) {
 console.log("typeof=%s", typeof test);
 var instance1 = new test("d11");
 console.log("instance1.name1=%s", instance1.name);
 console.log("instance1.name2=%s", instance1.getName());
 instance1.setName("d12")
 console.log("instance1.name3=%s", instance1.getName());
 console.log("instance1.gname=%s", instance1.getGname());

 var instance2 = new test("d21");
 console.log("instance2.name1=%s", instance2.name);
 console.log("instance2.name2=%s", instance2.getName());
 instance2.setName("d22")
 console.log("instance2.name3=%s", instance2.getName());
 console.log("instance2.gname=%s", instance2.getGname());
 console.log("instance1.gname=%s", instance1.getGname());
 });
 */