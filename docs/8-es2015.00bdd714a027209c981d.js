(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7vJP":function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",(function(){return G}));var i=n("ofXK"),r=n("tyNb"),o=n("fXoL"),s=n("2Vo4"),a=n("EY2u"),l=n("Cfvw"),c=n("yCtX"),h=n("DH7j"),d=n("7o/Q"),b=n("l7GE"),u=n("ZUHj"),p=n("Lhse");class f{constructor(e){this.resultSelector=e}call(e,t){return t.subscribe(new g(e,this.resultSelector))}}class g extends d.a{constructor(e,t,n=Object.create(null)){super(e),this.iterators=[],this.active=0,this.resultSelector="function"==typeof t?t:null,this.values=n}_next(e){const t=this.iterators;Object(h.a)(e)?t.push(new _(e)):t.push("function"==typeof e[p.a]?new m(e[p.a]()):new y(this.destination,this,e))}_complete(){const e=this.iterators,t=e.length;if(this.unsubscribe(),0!==t){this.active=t;for(let n=0;n<t;n++){let t=e[n];t.stillUnsubscribed?this.destination.add(t.subscribe(t,n)):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const e=this.iterators,t=e.length,n=this.destination;for(let o=0;o<t;o++){let t=e[o];if("function"==typeof t.hasValue&&!t.hasValue())return}let i=!1;const r=[];for(let o=0;o<t;o++){let t=e[o],s=t.next();if(t.hasCompleted()&&(i=!0),s.done)return void n.complete();r.push(s.value)}this.resultSelector?this._tryresultSelector(r):n.next(r),i&&n.complete()}_tryresultSelector(e){let t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}class m{constructor(e){this.iterator=e,this.nextResult=e.next()}hasValue(){return!0}next(){const e=this.nextResult;return this.nextResult=this.iterator.next(),e}hasCompleted(){const e=this.nextResult;return e&&e.done}}class _{constructor(e){this.array=e,this.index=0,this.length=0,this.length=e.length}[p.a](){return this}next(e){const t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class y extends b.a{constructor(e,t,n){super(e),this.parent=t,this.observable=n,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[p.a](){return this}next(){const e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(e,t,n,i,r){this.buffer.push(t),this.parent.checkIterators()}subscribe(e,t){return Object(u.a)(this,this.observable,this,t)}}var M=n("3N8a");class O extends M.a{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}requestAsyncId(e,t,n=0){return null!==n&&n>0?super.requestAsyncId(e,t,n):(e.actions.push(this),e.scheduled||(e.scheduled=requestAnimationFrame(()=>e.flush(null))))}recycleAsyncId(e,t,n=0){if(null!==n&&n>0||null===n&&this.delay>0)return super.recycleAsyncId(e,t,n);0===e.actions.length&&(cancelAnimationFrame(t),e.scheduled=void 0)}}var v=n("IjjT");class N extends v.a{flush(e){this.active=!0,this.scheduled=void 0;const{actions:t}=this;let n,i=-1,r=t.length;e=e||t.shift();do{if(n=e.execute(e.state,e.delay))break}while(++i<r&&(e=t.shift()));if(this.active=!1,n){for(;++i<r&&(e=t.shift());)e.unsubscribe();throw n}}}const w=new N(O);var x=n("pLZG"),C=n("IzEk"),j=n("eIep"),R=n("vkgz"),P=n("JIr8"),E=n("lJxs"),L=n("jhN1");const I=new o.q("HIGHLIGHT_OPTIONS");let k=(()=>{let e=class{constructor(e,t,r){this._options=r,this._ready=new s.a(null),this.ready=this._ready.asObservable().pipe(Object(x.a)(e=>!!e),Object(C.a)(1)),Object(i.l)(t)&&e.defaultView.hljs?this._ready.next(e.defaultView.hljs):this._loadLibrary().pipe(Object(j.a)(t=>this._options&&this._options.lineNumbers?(e.defaultView.hljs=t,T(n.e(10).then(n.t.bind(null,"gPJM",7))).pipe(Object(R.a)(()=>this._ready.next(t)))):(this._ready.next(t),a.a)),Object(P.a)(e=>(console.error("Unable to load hljs library",e),a.a))).subscribe()}_loadLibrary(){return this._options&&this._options.languages&&Object.keys(this._options.languages).length?Object(l.a)(T(Promise.all([n.e(2),n.e(9)]).then(n.t.bind(null,"pw5m",7)))).pipe(Object(j.a)(e=>this._loadLanguages(e))):Object(l.a)(T(Promise.all([n.e(2),n.e(1),n.e(7)]).then(n.t.bind(null,"FIf5",7))))}_loadLanguages(e){return function(...e){const t=e[e.length-1];return"function"==typeof t&&e.pop(),Object(c.a)(e,void 0).lift(new f(t))}(...Object.entries(this._options.languages).map(([t,n])=>T(n()).pipe(Object(R.a)(n=>e.registerLanguage(t,n))))).pipe(Object(E.a)(()=>e))}};return e.\u0275fac=function(t){return new(t||e)(o.Qb(i.c),o.Qb(o.B),o.Qb(I,8))},e.\u0275prov=Object(o.Gb)({factory:function(){return new e(Object(o.Qb)(i.c),Object(o.Qb)(o.B),Object(o.Qb)(I,8))},token:e,providedIn:"root"}),e})();const T=e=>Object(l.a)(e).pipe(Object(x.a)(e=>!!e&&!!e.default),Object(E.a)(e=>e.default));let S=(()=>{let e=class{constructor(e,t){this._loader=e,e.ready.pipe().subscribe(e=>{this._hljs=e,t&&t.config&&(e.configure(t.config),e.listLanguages().length<1&&console.error("[HighlightJS]: No languages were registered!"))})}get hljs(){return this._hljs}highlight(e,t,n,i){return this._loader.ready.pipe(Object(E.a)(r=>r.highlight(e,t,n,i)))}highlightAuto(e,t){return this._loader.ready.pipe(Object(E.a)(n=>n.highlightAuto(e,t)))}fixMarkup(e){return this._loader.ready.pipe(Object(E.a)(t=>t.fixMarkup(e)))}highlightBlock(e){return this._loader.ready.pipe(Object(E.a)(t=>t.highlightBlock(e)))}configure(e){return this._loader.ready.pipe(Object(E.a)(t=>t.configure(e)))}initHighlighting(){return this._loader.ready.pipe(Object(E.a)(e=>e.initHighlighting()))}registerLanguage(e,t){return this._loader.ready.pipe(Object(R.a)(n=>n.registerLanguage(e,t)))}listLanguages(){return this._loader.ready.pipe(Object(E.a)(e=>e.listLanguages()))}getLanguage(e){return this._loader.ready.pipe(Object(E.a)(t=>t.getLanguage(e)))}lineNumbersBlock(e){return this._loader.ready.pipe(Object(x.a)(e=>!!e.lineNumbersBlock),Object(R.a)(t=>t.lineNumbersBlock(e)))}};return e.\u0275fac=function(t){return new(t||e)(o.Qb(k),o.Qb(I,8))},e.\u0275prov=Object(o.Gb)({factory:function(){return new e(Object(o.Qb)(k),Object(o.Qb)(I,8))},token:e,providedIn:"root"}),e})(),H=(()=>{let e=class{constructor(e,t,n,i){this._hljs=t,this._sanitizer=n,this._options=i,this.highlighted=new o.n,this._nativeElement=e.nativeElement}ngOnChanges(e){e.code&&e.code.currentValue&&e.code.currentValue!==e.code.previousValue&&this.highlightElement(this.code,this.languages)}highlightElement(e,t){this.setTextContent(e),this._hljs.highlightAuto(e,t).subscribe(e=>{this.setInnerHTML(e.value),this.lineNumbers&&this._options&&this._options.lineNumbers&&this.addLineNumbers(),this.highlighted.emit(e)})}addLineNumbers(){this.destroyLineNumbersObserver(),w.schedule(()=>{this._hljs.lineNumbersBlock(this._nativeElement).subscribe(),this._lineNumbersObs=new MutationObserver(()=>{this._nativeElement.firstElementChild&&"TABLE"===this._nativeElement.firstElementChild.tagName.toUpperCase()&&this._nativeElement.classList.add("hljs-line-numbers"),this.destroyLineNumbersObserver()}),this._lineNumbersObs.observe(this._nativeElement,{childList:!0})})}destroyLineNumbersObserver(){this._lineNumbersObs&&(this._lineNumbersObs.disconnect(),this._lineNumbersObs=null)}setTextContent(e){w.schedule(()=>this._nativeElement.textContent=e)}setInnerHTML(e){w.schedule(()=>this._nativeElement.innerHTML=this._sanitizer.sanitize(o.I.HTML,e))}};return e.\u0275fac=function(t){return new(t||e)(o.Kb(o.l),o.Kb(S),o.Kb(L.b),o.Kb(I,8))},e.\u0275dir=o.Fb({type:e,selectors:[["","highlight",""]],hostVars:2,hostBindings:function(e,t){2&e&&o.Cb("hljs",!0)},inputs:{code:["highlight","code"],languages:"languages",lineNumbers:"lineNumbers"},outputs:{highlighted:"highlighted"},features:[o.yb]}),e})(),A=(()=>{let e=class{};return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)}}),e})();const q=function(){return["typescript"]},V=[{path:"",component:(()=>{class e{constructor(){this.code_install_command="\nimport * as Rn from 'https://deno.land/x/rhino/mod.ts';\n",this.code_helloWorld_step1="\nimport {\n    Rhino_Server, OnServerListening,\n    ServerOptions, RunServers\n} from \"https://deno.land/x/rhino/mod.ts\";\n\n// The server's router (next step)\nimport { myRouter } from './router.ts';\n\n// Creates a server\n@Rhino_Server({\n    port: 3200,\n    router: myRouter\n})\nexport class myServer implements OnServerListening {\n    /** Executes once the server starts listening to requests */\n    public onListening(app: ServerOptions) {\n        console.log(`Listening to request made to ${app.hostname}:${app.port}`)\n    }\n}\n\n/**\n * Runs all the servers for this application.\n * (A single application can have multiple servers)\n */\nRunServers([myServer]);",this.code_helloWorld_step2='\nimport { RhinoRouter } from "https://deno.land/x/rhino/mod.ts";\n\n// Creates a new router\nconst ROUTER = new RhinoRouter();\n\n// Endpoints (next step)\nimport { helloWorld } from "./hello_world.endpoint.ts";\n\n// Mounts the helloWorld endpoint to the root of the server\nROUTER.addEndpoint(helloWorld);\n\n// Exports the router\nexport const myRouter = ROUTER;\n',this.code_helloWorld_step3='\nimport {\n    Rhino_Endpoint, OnEndpointCalled, RhinoRequest,\n    RhinoResponse, NextHook, NextError, HttpMethod, MIMEType\n} from "https://deno.land/x/rhino/mod.ts";\n\n\n@Rhino_Endpoint({\n    path: "/hello", // The path for this endpoint\n    method: HttpMethod.GET, // This endpoint will only listen to GET requests\n})\nexport class helloWorld implements OnEndpointCalled {\n\n    // The constructor accepts the following parameters (in that order):\n    // The Request Object,\n    // The Response Object,\n    // The Next Hook function (middlewares of type "After"), and\n    // The Error function\n    constructor(\n        private req: RhinoRequest,\n        private res: RhinoResponse,\n        private next: NextHook,\n        private error: NextError\n    ) { }\n\n    /** Executed when this endpoint is requested */\n    public onEndpointCall() {\n        // Sets the content type, and sends data to the client\n        this.res.contentType(MIMEType.TextHTML).send("<h1>Hello Rhinos \u{1f98f}!</h1>");\n    }\n}\n',this.folder_structure="\nmain.ts\nserver.ts\nrouter.ts\nroutes\n| ---- users\n|   |-- create_users.endpoint.ts\n|   |-- get_user_info.endpoint.ts\n| ---- posts\n|   |-- get_all_posts.endpoint.ts\nhooks\n|   |-- custom.hook.ts\nerror_handlers\n|   |-- not_found.error_handler.ts\n|   |-- forbidden.error_handler.ts\n"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Eb({type:e,selectors:[["rhino-home"]],decls:138,vars:15,consts:[[1,"home-cylinder"],[1,"hero"],[1,"hero-wrapper"],[1,"content"],[1,"content-wrapper","page-content"],["id","installation"],["href","#installation"],["href","https://deno.land/x/rhino","target","_blank"],[3,"highlight","languages"],["id","hello_world"],["href","#hello_world"],["id","scalability"],["href","#scalability"],["href","https://github.com/faustotnc/Rhino/tree/master/_example","target","_blank"]],template:function(e,t){1&e&&(o.Nb(0,"div",0),o.Nb(1,"div",1),o.Nb(2,"div",2),o.Nb(3,"h1"),o.fc(4,"Rhino \u{1f98f}"),o.Mb(),o.Nb(5,"h2"),o.fc(6,"Deno Framework for Scalable APIs."),o.Mb(),o.Nb(7,"p"),o.fc(8,"(More documentation coming soon...)"),o.Mb(),o.Mb(),o.Mb(),o.Nb(9,"div",3),o.Nb(10,"div",4),o.Nb(11,"section"),o.Nb(12,"p"),o.fc(13,"Rhino is an Angular-inspired framework for creating scalable REST-APIs. It provides a route-endpoint architecture that takes advantage of the many features provided by the TypeScript language. It encourages a project structure that is self-described and consistent, so that programmers within the project can collaborate seamlessly."),o.Mb(),o.Nb(14,"p"),o.fc(15,"Rhino comes with five different modules for strong REST-API creation:"),o.Mb(),o.Nb(16,"ul"),o.Nb(17,"li"),o.Nb(18,"b"),o.fc(19,"@Rhino_Server"),o.Mb(),o.fc(20," - "),o.Nb(21,"i"),o.fc(22,"Class Decorator"),o.Mb(),o.fc(23,": Creates a new server."),o.Mb(),o.Nb(24,"li"),o.Nb(25,"b"),o.fc(26,"RhinoRouter"),o.Mb(),o.fc(27," - "),o.Nb(28,"i"),o.fc(29,"Class"),o.Mb(),o.fc(30,": Defines the routes and endpoints for a server."),o.Mb(),o.Nb(31,"li"),o.Nb(32,"b"),o.fc(33,"@Rhino_Endpoint"),o.Mb(),o.fc(34," - "),o.Nb(35,"i"),o.fc(36,"Class Decorator"),o.Mb(),o.fc(37,": Defines an endpoint handler."),o.Mb(),o.Nb(38,"li"),o.Nb(39,"b"),o.fc(40,"@Rhino_Hook"),o.Mb(),o.fc(41," - "),o.Nb(42,"i"),o.fc(43,"Class Decorator"),o.Mb(),o.fc(44,": Defines a middleware that can be hooked to the request-response middleware pipeline."),o.Mb(),o.Nb(45,"li"),o.Nb(46,"b"),o.fc(47,"@Rhino_Error"),o.Mb(),o.fc(48," - "),o.Nb(49,"i"),o.fc(50,"Class Decorator"),o.Mb(),o.fc(51,": Defines an error handler."),o.Mb(),o.Mb(),o.Mb(),o.Nb(52,"section",5),o.Nb(53,"h3"),o.Nb(54,"a",6),o.fc(55,"Installation"),o.Mb(),o.Mb(),o.Nb(56,"p"),o.fc(57,"Installing Rhino into your app is as easy as importing it from Deno's "),o.Nb(58,"a",7),o.fc(59,"third-party website"),o.Mb(),o.fc(60,":"),o.Mb(),o.Nb(61,"pre"),o.Lb(62,"code",8),o.Mb(),o.Mb(),o.Nb(63,"section",9),o.Nb(64,"h3"),o.Nb(65,"a",10),o.fc(66,"Hello World"),o.Mb(),o.Mb(),o.Nb(67,"h4"),o.fc(68,"Step 1) Create a Server"),o.Mb(),o.Nb(69,"p"),o.fc(70,"Crete a file named "),o.Nb(71,"code"),o.fc(72,"server.ts"),o.Mb(),o.fc(73,", then copy and paste the following code inside it."),o.Mb(),o.Nb(74,"pre"),o.Nb(75,"header"),o.fc(76,"./server.ts"),o.Mb(),o.Lb(77,"code",8),o.Mb(),o.Lb(78,"br"),o.Nb(79,"h4"),o.fc(80,"Step 2) Create a Router"),o.Mb(),o.Nb(81,"p"),o.fc(82,"Create a file named "),o.Nb(83,"code"),o.fc(84,"router.ts"),o.Mb(),o.fc(85,", then copy and paste the following code inside it."),o.Mb(),o.Nb(86,"pre"),o.Nb(87,"header"),o.fc(88,"./router.ts"),o.Mb(),o.Lb(89,"code",8),o.Mb(),o.Lb(90,"br"),o.Nb(91,"h4"),o.fc(92,"Step 3) Create an Endpoint"),o.Mb(),o.Nb(93,"p"),o.fc(94,"Create a file named "),o.Nb(95,"code"),o.fc(96,"hello_world.endpoint.ts"),o.Mb(),o.fc(97,", then copy and paste the following code inside it."),o.Mb(),o.Nb(98,"pre"),o.Nb(99,"header"),o.fc(100,"./hello_world.endpoint.ts"),o.Mb(),o.Lb(101,"code",8),o.Mb(),o.Nb(102,"p"),o.fc(103,"Open a terminal and run "),o.Nb(104,"code"),o.fc(105,"$ deno run -c ./tsconfig.json --allow-net server.ts"),o.Mb(),o.fc(106,". Finally, navigate to "),o.Nb(107,"code"),o.fc(108,"localhost:3200/hello"),o.Mb(),o.fc(109," to be greeted by your newly created Rhino server. "),o.Mb(),o.Nb(110,"p"),o.Nb(111,"b"),o.fc(112,"NOTE"),o.Mb(),o.fc(113,": Using Rhino requires "),o.Nb(114,"code"),o.fc(115,'"experimentalDecorators": true'),o.Mb(),o.fc(116," in your project's "),o.Nb(117,"code"),o.fc(118,"tsconfig.json"),o.Mb(),o.fc(119," file. "),o.Mb(),o.Mb(),o.Nb(120,"section",11),o.Nb(121,"h3"),o.Nb(122,"a",12),o.fc(123,"Scalability"),o.Mb(),o.Mb(),o.Nb(124,"p"),o.fc(125,' You may be wondering, why so many files for a simple "hello world" project? The answer lies in scalability. Most real-world REST-APIs do not have a single file for all their code. Instead, the code is split into many files, folders, and sub-folders to create a robust application. Rhino takes care of all the thinking that goes behind defining a folder structure for your project by encouraging code refraction.'),o.Mb(),o.Nb(126,"p"),o.fc(127,"In general, projects using Rhino "),o.Nb(128,"i"),o.fc(129,"should"),o.Mb(),o.fc(130," follow the following folder structure:"),o.Mb(),o.Nb(131,"pre"),o.Lb(132,"code",8),o.Mb(),o.Nb(133,"p"),o.fc(134,"To see an example of a simple Rhino project, visit the "),o.Nb(135,"a",13),o.fc(136,"_example"),o.Mb(),o.fc(137," folder on GitHub. "),o.Mb(),o.Mb(),o.Mb(),o.Mb(),o.Mb()),2&e&&(o.Ab(62),o.Zb("highlight",t.code_install_command.trim())("languages",o.ac(10,q)),o.Ab(15),o.Zb("highlight",t.code_helloWorld_step1.trim())("languages",o.ac(11,q)),o.Ab(12),o.Zb("highlight",t.code_helloWorld_step2.trim())("languages",o.ac(12,q)),o.Ab(12),o.Zb("highlight",t.code_helloWorld_step3.trim())("languages",o.ac(13,q)),o.Ab(31),o.Zb("highlight",t.folder_structure.trim())("languages",o.ac(14,q)))},directives:[H],styles:[".home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{background:var(--color-secondary);display:-webkit-flex;justify-content:center;flex-direction:row;align-items:center;text-align:center;padding:0 5%;height:400px}@media screen and (min-width:300px){.home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{height:calc(400px + 100*(100vw - 300px)/900)}}@media screen and (min-width:1200px){.home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{height:500px}}.home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:550;font-size:52px}@media screen and (min-width:300px){.home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:calc(52px + 20*(100vw - 300px)/900)}}@media screen and (min-width:1200px){.home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:72px}}.home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:24px}@media screen and (min-width:300px){.home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:calc(24px + 16*(100vw - 300px)/900)}}@media screen and (min-width:1200px){.home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:40px}}.home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:450;opacity:.8;font-size:18px}@media screen and (min-width:300px){.home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:calc(18px + 14*(100vw - 300px)/900)}}@media screen and (min-width:1200px){.home-cylinder[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px}}.home-cylinder[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;display:-webkit-flex;justify-content:center;flex-direction:row}.home-cylinder[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{width:90%;max-width:720px}"]}),e})()}];let D=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},imports:[[r.b.forChild(V)],r.b]}),e})();const z={provide:I,useValue:{languages:{typescript:()=>n.e(1).then(n.t.bind(null,"r0Rl",7))}}};let Q=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},providers:[z],imports:[A]}),e})();var W=n("FKr1");n("R1ws"),n("u47x");let B=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},imports:[[W.c,W.a],W.a]}),e})(),G=(()=>{class e{}return e.\u0275mod=o.Ib({type:e}),e.\u0275inj=o.Hb({factory:function(t){return new(t||e)},imports:[[i.b,D,B,Q]]}),e})()}}]);