import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule} from '@angular/router';

@NgModule({//装饰器函数
  declarations: [//声明本模块中拥有的视图类，angular有三种视图类:组件、指令、管道
    AppComponent,
    LoginComponent
  ],
  imports: [//本模块声明的组件模板需要的类所在的其他模块
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path : 'login',
        component : LoginComponent
      }
    ])
  ],
  providers: [//服务器创建者，并加入到全局服务列表中，可用于应用任何部分.
          //根模块中的这个providers是配置在模块中全局可用的service或参数的
  ],
  bootstrap: [AppComponent] //bootstrap : 根组件，它是所有其他视图的宿主。只有根模块才能设置bootstrap属性
})
export class AppModule { }//根模块按照约定类名叫做"AppModule"，放在app.module.ts中
