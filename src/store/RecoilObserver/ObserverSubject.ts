export interface IRecoilObserver {
  topic: string;
  cb: (payload: any) => void;
  state: any;
}

/**
 * @export
 * @class ObserverSubject
 */
export class ObserverSubject {
  private observers: Array<IRecoilObserver> = [];
  private name = "";

  constructor(name: string) {
    this.name = name;
    this.log("init");
  }

  /**
   * @private
   * @name log
   * @param {...any} message
   * @memberof ObserverSubject
   */
  private log(...message: any): void {
    console.info(`[ObserverSubject: ${this.name}] `, ...message);
  }

  /**
   * @name attach
   * @param {Observer} observer
   * @memberof ObserverSubject
   */
  public attach(observer: IRecoilObserver): void {
    this.observers.push(observer);
    this.log("Attached", observer);
  }

  /**
   * @name detach
   * @param {Observer} observerToRemove
   * @memberof ObserverSubject
   */
  public detach(observerToRemove: IRecoilObserver): void {
    this.observers = this.observers.filter(
      (observer) => observerToRemove !== observer
    );
    this.log("Detached", observerToRemove);
  }

  /**
   * @name notify
   * @param {string} topic
   * @param {*} payload
   * @memberof ObserverSubject
   */
  public notify(topic: string, payload: any): void {
    let countNotified = 0;
    this.observers.forEach((observer: IRecoilObserver) => {
      if (observer.topic === topic) {
        observer.cb({ ...observer.state, ...payload });
        countNotified += 1;
      }
    });

    this.log(`Notified ${countNotified} observers.`, topic, payload);
  }
}

export default ObserverSubject;
