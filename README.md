# DesignPattern
设计模式

## 设计模式的六大原则
  1. 开闭原则
    对扩展开放，对修改关闭。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。

  2. 里氏代换原则
    任何基类可以出现的地方，子类一定可以出现。

  3. 依赖倒置原则
    这个原则是开闭原则的基础，具体内容：针对接口编程，依赖于抽象而不依赖于具体。

  4. 接口隔离原则
    使用多个隔离的接口，比使用单个接口要好。它强调降低依赖，降低耦合。

  5. 迪米特法则—最少知道原则
    一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。

  6. 合成复用原则
    尽量使用合成/聚合的方式，而不是使用继承。


### 01-简单工厂模式
  * 定义：
    * 通过专门定义一个类来负责创建其他类的实例，被创建的实例通常都具有共同的父类

  * 优点：
    * 一个调用者想创建一个对象，只要知道其具体的名称就可以了。
    * 屏蔽产品的具体实现，调用者只关心产品的接口。

  * 缺点：
    * 每次增加一个产品都需要修改这个工厂类。

  * 应用实例：
    * 需要一辆车，可以直接从工厂里面提货，而不用去管这辆车是怎么做出来的，以及这辆车的具体实现。
    * 游戏中打开/关闭各个窗口，比如背包，宠物，活动等窗口，可以设置一个窗口工厂。
  
### 02-抽象工厂模式
  * 定义：
     * 工厂的工厂。提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。

  * 优点：
    * 具体产品在应用层的代码隔离，无需关心创建的细节。
    * 将一个系列的产品统一到一起创建。

  * 缺点:
    * 规定了所有可能被创建的产品集合，扩展新的产品困难。
    * 增加了系统的抽象性和理解难度。

  * 使用场景
    * qq换皮肤，一整套一起换。
    * 生成不同平台的程序。

### 03-单例模式
  * 定义：
     * 指一个类只有一个实例，且该类能自行创建这个实例的一种模式。保证一个类仅有一个实例，并提供一个访问它的全局访问点。

  * 优点：
    * 具体产品在应用层的代码隔离，无需关心创建的细节。
    * 将一个系列的产品统一到一起创建。

  * 缺点:
    * 规定了所有可能被创建的产品集合，扩展新的产品困难。
    * 增加了系统的抽象性和理解难度。

  * 应用实例：
    * 一个班级只要一个班主任。
    * 一些常见的管理类。

  * 注意：
    * 单例类只能有一个实例。
    * 单例类必须自己创建自己的唯一实例。
    * 单例类必须给所有其他对象提供这一实例。

### 04-适配器模式
  * 定义：
    * 是作为两个不兼容的接口之间的桥梁。例如读卡器就是作为内存卡与笔记本之间的适配器。
  * 优点：
    * 可以让任何两个没有关联的类一起运行
    * 提高了类的复用。
    * 增加了类的透明度。
    * 灵活性好。

  * 缺点:
    * 过多的使用适配器，会让系统非常凌乱，不易整体进行把握。
    * 增加了系统的抽象性和理解难度。

  * 应用实例：
    * 美国电器110v，中国220v，需要一个适配器
    * 接口转换
    * 老项目适配新项目

  * 注意：
    * 适配器不是在详细设计时添加的，而是解决正在服役的项目的问题。 

### 05-建造者模式
  * 定义：
    * 使用多个简单的对象一步一步构建成一个复杂的对象。

  * 意图:
    * 将一个复杂的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。

  * 优点：
    * 建造者独立，易扩展。
    * 便于控制细节风险。

  * 缺点:
    * 产品必须有共同点，范围有限制。
    * 如内部变化复杂，会有很多的建造者。

  * 应用实例：
    * 去肯德基，汉堡、可乐、薯条、炸鸡等是不变的，而其组合是经常变化的，生成不同的套餐。

  * 注意：
    * 与工厂模式的区别是：建造者模式更加关注与零件装配的顺序。 

### 06-原型模式
  * 定义：
    * 用于创建重复的对象，同时又能保证性能。

  * 意图:
    * 用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。

  * 优点：
    * 性能提高。
    * 没有构造函数的约束。

  * 缺点:
    * 配备克隆方法需要对类的功能进行通盘考虑，特别当一个类引用不支持串行化的间接对象，或者引用含有循环结构的时候。
    * 必须实现clone方法。

  * 应用实例：
    * 飞机大战中的子弹。
    * 克隆clone()对象。

  * 注意：
    * 与通过对一个类进行实例化来构造新的对象不同的是，原型模式是通过拷贝一个现有对象生成新对象的。 

### 07-过滤器模式
  * 定义：
    * 使用不同的标准来过滤一组对象，通过逻辑运算已解耦的方式把它们连接起来。

  * 优点：
    * 可自由组合删选条件。
    * 灵活性高。

  * 缺点:
    * 每种删选都需要添加指定的过滤条件。

  * 应用实例：
    * 房间匹配机制中需要用到条件筛选。
    

### 08-组合模式
  * 定义：
    * 又叫部分整体模式，是用于把一组相似的对象当作一个单一的对象。组合模式依据树形结构来组合对象，用来表示部分以及整体层次。

  * 意图:
    * 将对象组合成树形结构以表示"部分-整体"的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。

  * 优点：
    * 高层模块调用简单。
    * 节点自由增加。

  * 缺点:
    * 在使用组合模式时，其叶子和树枝的声明都是实现类，而不是接口，违反了依赖倒置原则。

  * 使用场景：
    * 部分、整体场景，如树形菜单，文件、文件夹的管理。
    * 公司结构。
    
 ### 09-装饰器模式
   * 定义：
    * 允许向一个现有的对象添加新的功能，同时又不改变其结构。

  * 意图:
    * 动态地给一个对象添加一些额外的职责。就增加功能来说，装饰器模式相比生成子类更为灵活。

  * 优点：
    * 解耦。
    * 可以动态的扩展一个实现类的功能。

  * 缺点:
    * 多层装饰比较复杂。

  * 使用场景：
    * 扩展一个类的功能。
    * 动态的增加功能，动态撤销。
    * ECS模式中的C(Component)
    * cocos creator

### 10-外观模式
  * 定义：
    * 隐藏系统的复杂性，并向客户端提供一个客户端可以访问系统的接口。

  * 意图：
    * 为子系统中的一组接口提供一个一致的界面，外观模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。

  * 主要解决：
    * 降低访问复杂系统的内部子系统的复杂度，简化客户端与之的接口。

  * 优点：
    * 减少系统相互依赖。
    * 提高灵活性。
    * 提高了安全性。

  * 缺点:
    * 不复合开闭原则，如果要改东西很麻烦，继承重写都不合适。

  * 使用场景：
    * 为复杂的模块或子系统提供外界访问的模块。
    * 子系统相对独立。
    * 预防低水平人员带来的风险。


### 11-桥接模式
  * 定义：
    * 用于把抽象化与实现化解耦，使得二者可以独立变化。
  * 意图：
    * 将抽象部分与实现部分分离，使他们都可以独立变化。
  * 主要解决：
    * 在有多种可能会变化的情况下，用继承会造成类爆炸问题，扩展起来不灵活。
  * 优点：
    * 抽象和实现分离。
    * 优秀的扩展能力。
    * 实现细节对客户透明。
  * 缺点:
    * 会增加系统的理解与设计难度。由于聚合关联关系建立在抽象层，要求开发者针对抽象进行设计与编程。
  * 使用场景：
    * 如果一个系统需要在构件的抽象化角色和具体化角色之间增加更多的灵活性，避免在两个层次之间建立静态的继承联系。
    * 对于那些不希望使用继承或因为多层继承导致系统类的个数急剧增加的系统，桥接模式尤为适用。
    * 一个类存在两个独立变化的维度，且这两个维度都需要进行扩展。


### 12-享元模式
  * 定义：
    * 主要用于减少创建对象的数量，以减少内存占用和提高性能。

  * 意图：
    * 运用共享技术有效地支持大量细粒度的对象。

  * 主要解决：
    * 在有大量对象时，避免重新创建，直接返回内存中已有的对象。

  * 优点：
    * 大大减少对象的创建，降低系统的内存，使效率提高。

  * 缺点:
    * 提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，不应该随着内部状态的变化而变化，否则会造成系统的混乱。

  * 使用场景：
    * 系统有大量相似的对象。
    * 需要缓冲池的场景。
    * 飞机大战中的子弹。


### 13-代理模式
  * 定义：
    * 一个类代表另一个类的功能。
  * 意图：
    * 为其他对象提供一种代理以控制对这个对象的访问。
  * 主要解决：
    * 在直接访问对象时带来的问题。
  * 优点：
    * 职责清晰。
    * 高扩展性。
    * 智能化。
  * 缺点:
    * 由于添加了代理对象，可能会造成请求的处理速度变慢。
    * 实现代理模式需要额外的工作，有些代理模式的实现非常复杂。
  * 使用场景：
    * 远程代理、虚拟代理、copy-on-write代理、保护代理、Cache代理、防火墙代理、同步化代理、智能引用代理。
  * 注意：
    * 和适配器模式的区别：适配器模式主要改变所考虑对象的接口，而代理模式不能改变所代理类的接口。
    * 和装饰器模式的区别：装饰器模式为了增强功能，而代理模式是为了加以控制。


### 14-责任链模式
  * 定义：
    * 为请求创建了一个接收者对象的链。
  * 意图：
    * 避免请求发送者与接收者耦合在一起，让多个对象都有可能接受请求，将这些对象连接成一条链，并且沿着这条链传递请求，直到有对象处理它为止。

  * 优点：
    * 降低耦合度，它将请求的发送者与接收者解耦。
    * 简化了对象，使得对象不需要知道链的结构。
    * 增强给对象指派职责的灵活性。
    * 增加新的请求处理类很方便。
  * 缺点:
    * 不能保证请求一定被接收。
    * 系统性能将受到一定影响，调试不方便，可能会造成循环调用。
    * 可能不容易观察运行时的特征，有碍于除错。
  * 使用场景：
    * 有多个对象可以处理同一请求，具体哪个对象处理该请求，由运行时刻自动确定。
    * 在不明确指定接收者的情况下，向多个对象中的一个提交一个请求。
    * 可动态指定一组对象处理请求。


### 15-命令模式
  * 定义：
    * 请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。
  * 意图：
    * 将一个请求封装成一个对象，从而使您可以用不同的请求对客户进行参数化。

  * 优点：
    * 降低耦合度。
    * 新的命令很容易添加在系统中去。

  * 缺点:
    * 使用命令模式可能会导致某些系统有过多的具体命令类。

  * 使用场景：
    * 认为是命令的地方都可以使用命令模式，比如每个按钮。


### 16-中介者模式
  * 定义：
    * 用来降低多个对象和类之间的通信复杂性。这种模式提供了一个中介类，该类通常处理不同类之间的通信，并支持松耦合，使代码易于维护。
  * 意图：
    * 用一个中介对象来封装一系列的对象交互，中介者使各对象不需要显示地互相引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。

  * 优点：
    * 降低了类的复杂度，将一对多转化成一对一。
    * 各个类之间的解耦。
    * 符合最少知道原则。

  * 缺点:
    * 中介者会很庞大，变得复杂难以维护。

  * 使用场景：
    * 系统中对象之间存在比较复杂的引用关系，导致它们之间的依赖关系结构混乱而且难以复用改该对象。
    * 想通过一个中间类来封住多个类中的行为，而又不想生成太多的子类。


### 17-观察者模式
  * 定义：
    * 定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态变化时，会通知所有的观察者对象，使他们能够自动更新自己。
  * 意图：
    * 定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。

  * 优点：
    * 降低了目标与观察者之间的耦合关系，两者是抽象耦合关系。
    * 目标与观察者之间建立一套触发机制。

  * 缺点:
    * 如果一个被观察者有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。
    * 如果观察者和被观察者有循环依赖的话，可能会循环调用，导致系统崩溃。

  * 使用场景：
    * 一个对象发送改变需要通知其他对象。       


### 18-状态模式
  * 定义：
    * 当一个对象的内在状态改变时允许改变其行为，这个对象看起来像是改变了其类。

  * 优点：
    * 封装了转换规则。
    * 枚举可能的状态，在枚举状态之前需要确定状态的种类。
    * 将所有与某个状态有关的行为放到一个类中，并且可以方便的增加新的状态，只需要改变对象状态即可改变对象的行为。
    * 允许状态转换逻辑与状态对象合成一体，而不是，某一个巨大的条件语句块。
    * 可以让多个环境对象共享一个状态对象，从而减少系统中对象的个数。

  * 缺点:
    * 状态模式的使用必然会增加系统类和对象的个数。
    * 状态模式的结构与实现都较为复杂，如果使用不当将导致程序结构和代码混乱。
    * 对于开闭原则的支持并不太好，对于可以切换状态的状态模式，增加新的状态需要修改源代码。
    
  * 使用场景：
    * 行为随状态改变而改变的场景。
    * 条件、分支语句的代替者。


### 19-策略模式
  * 定义：
    * 一个类的行为或其算法可以在运行时更改。创建表示各种策略的对象和一个行为随着策略对象改变而改变的context对象。策略对象改变context对象的执行算法。
  * 意图：
    * 定义一系列的算法，把它们一个个封装起来，并且使他们可相互替换。
  * 优点：
    * 算法可以自由切换。
    * 避免使用多重条件判断。
    * 扩展性好。
  * 缺点:
    * 策略类会增加。
    * 所有策略类都需要对外暴露。
  * 使用场景：
    * 如果一个系统中有许多类，它们之间的区别仅在于它们的行为，那么使用策略模式可以动态地让一个对象在许多行为中选中一种行为。
    * 一个系统需要动态地在几种算法中选择一种。
  * 与状态模式的区别:
    * 状态模式的思想是，状态之间的切换，在状态A执行完毕后可以指向状态B。状态模式是不停的切换状态执行。
    * 策略模式的思想是，考虑多种不同的业务将不同的算法封装起来，便于调用者使用。策略模式只是条件选择执行一次。

### 20-MVC模式
  * MVC模式代表Model-View_Controller(模型-视图-控制器)模式。这种模式用于应用程序的分层设计。

  * Model(模型)：模型代表一个存取数据的对象。它也可以带有逻辑，在数据变化时更新控制器。

  * View(视图)：视图代表模型包含的数据的可视化。

  * Controller(控制器)：控制器作用于模型和视图上。它控制数据流向模型对象，并在数据变化时更新视图。它使视图与模型分离开。

  在MVC的基础上有演变出来了MVP，MVVM，PureMVC。
